#!/usr/bin/env python3
"""
Extracts mentor data from the tmdl_archive into a clean, portable format.

Output:
  proposed_center/data/mentors/mentors.json   — all mentor records
  proposed_center/data/mentors/images/        — renamed profile photos

Source (read-only):
  tmdl_archive/_tools/mentor_data/all_mentors.json  — card-level fields
  tmdl_archive/user-2/{slug}/index.html             — full bio + LinkedIn
  tmdl_archive/wp-content/uploads/ultimatemember/{id}/profile_photo.*
"""

import json
import re
import shutil
from pathlib import Path
from html.parser import HTMLParser

ARCHIVE = Path(__file__).parent.parent.parent / "tmdl_archive"
OUT_DIR = Path(__file__).parent / "mentors"
IMAGES_DIR = OUT_DIR / "images"

ALL_MENTORS_JSON = ARCHIVE / "_tools" / "mentor_data" / "all_mentors.json"
PROFILES_DIR = ARCHIVE / "user-2"
PHOTOS_DIR = ARCHIVE / "wp-content" / "uploads" / "ultimatemember"


def slugify(name: str) -> str:
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"\s+", "-", slug.strip())
    slug = re.sub(r"-+", "-", slug)
    return slug


class ProfileParser(HTMLParser):
    """Extracts bio and LinkedIn URL from a mentor profile HTML page."""

    def __init__(self):
        super().__init__()
        self.bio = ""
        self.linkedin = ""
        self._in_bio = False
        self._in_linkedin = False
        self._bio_depth = 0
        self._buf = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        el_id = attrs_dict.get("id", "")

        if "professional-biography" in el_id and "um-field-value" not in el_id:
            # The outer field div — wait for inner um-field-value
            pass
        if re.search(r"professional-biography-\d+", el_id):
            self._in_bio = True
            self._bio_depth = 1
            self._buf = []
            return

        if re.search(r"linkedin-\d+", el_id) and tag == "div":
            self._in_linkedin = True
            return

        if self._in_linkedin and tag == "a":
            self.linkedin = attrs_dict.get("href", "")
            self._in_linkedin = False

        if self._in_bio:
            self._bio_depth += 1
            self._buf.append(f"<{tag}>")

    def handle_endtag(self, tag):
        if self._in_bio:
            self._bio_depth -= 1
            if self._bio_depth <= 0:
                self._in_bio = False
                raw = "".join(self._buf)
                # Strip HTML tags, collapse whitespace
                text = re.sub(r"<[^>]+>", " ", raw)
                text = re.sub(r"\s+", " ", text).strip()
                self.bio = text
            else:
                self._buf.append(f"</{tag}>")

    def handle_data(self, data):
        if self._in_bio:
            self._buf.append(data)


def parse_profile(html_path: Path) -> dict:
    if not html_path.exists():
        return {"bio": "", "linkedin": ""}
    parser = ProfileParser()
    parser.feed(html_path.read_text(encoding="utf-8", errors="ignore"))
    return {"bio": parser.bio, "linkedin": parser.linkedin}


def find_photo(user_id: int) -> Path | None:
    user_dir = PHOTOS_DIR / str(user_id)
    for ext in ("jpg", "jpeg", "png", "gif", "webp"):
        candidate = user_dir / f"profile_photo.{ext}"
        if candidate.exists():
            return candidate
    return None


def extract_slug_from_url(profile_url: str) -> str:
    # e.g. https://tmdl.center.northeastern.edu/user-2/jane-aboyoun/
    parts = [p for p in profile_url.rstrip("/").split("/") if p]
    return parts[-1] if parts else ""


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    raw = json.loads(ALL_MENTORS_JSON.read_text())
    users = raw.get("users", []) if isinstance(raw, dict) else raw

    mentors = []
    missing_photos = []
    missing_profiles = []

    for u in users:
        user_id = u.get("id")
        name = u.get("display_name", "").strip()
        if not name:
            continue

        # Derive slug from profile URL, fall back to name-based slug
        profile_url = u.get("profile_url", "")
        slug = extract_slug_from_url(profile_url) or slugify(name)

        # Parse full bio + LinkedIn from archived profile page
        html_path = PROFILES_DIR / slug / "index.html"
        if not html_path.exists():
            missing_profiles.append(slug)
        profile = parse_profile(html_path)

        # Copy and rename photo
        photo_src = find_photo(user_id)
        image_filename = ""
        if photo_src:
            ext = photo_src.suffix  # .jpg, .png, etc.
            dest_name = f"{slug}{ext}"
            shutil.copy2(photo_src, IMAGES_DIR / dest_name)
            image_filename = f"images/{dest_name}"
        else:
            missing_photos.append({"id": user_id, "name": name})

        mentor = {
            "id": user_id,
            "slug": slug,
            "name": name,
            "title": u.get("current_roles_titles", "").strip(),
            "company": u.get("company_name", "").strip(),
            "industry": u.get("user-industry1", "").strip(),
            "focus": u.get("focus", "").strip(),
            "location": u.get("user-locations-final", "").strip(),
            "linkedin": profile["linkedin"],
            "bio": profile["bio"],
            "image": image_filename,
        }
        mentors.append(mentor)

    # Sort alphabetically by last name
    mentors.sort(key=lambda m: m["name"].split()[-1].lower())

    out_path = OUT_DIR / "mentors.json"
    out_path.write_text(json.dumps(mentors, indent=2, ensure_ascii=False))

    print(f"Done. {len(mentors)} mentors written to {out_path}")
    print(f"Missing photos: {len(missing_photos)}")
    for m in missing_photos:
        print(f"  - [{m['id']}] {m['name']}")
    print(f"Missing profile pages: {len(missing_profiles)}")
    for s in missing_profiles:
        print(f"  - {s}")


if __name__ == "__main__":
    main()
