#!/usr/bin/env python3
"""
Extract content from TMDL HTTrack archive HTML files and save as clean Markdown.
Run with: /path/to/.venv/bin/python3 proposed_center/extract.py
"""

import os
import re
from datetime import date
from bs4 import BeautifulSoup
import markdownify

ARCHIVE_ROOT = os.path.join(os.path.dirname(__file__), "..", "tmdl_archive")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "content")
EXTRACTED_DATE = date.today().isoformat()

# Tags/classes/ids to strip before extraction
STRIP_TAGS = [
    "script", "style", "noscript", "iframe",
    "nav", "footer", "header",
]
STRIP_IDS = [
    "wpadminbar", "wp-toolbar", "masthead", "site-header",
    "site-footer", "colophon", "sidebar", "secondary",
]
STRIP_CLASSES = [
    "site-header", "site-footer", "navigation", "nav-links",
    "widget", "widget-area", "sidebar", "wp-block-navigation",
    "menu", "main-navigation", "breadcrumb", "post-navigation",
    "comments-area", "comment-respond", "related-posts",
    "cookie-notice", "pum-overlay", "elementor-location-header",
    "elementor-location-footer", "elementor-section-wrap",
    "e-con-inner",  # Elementor inner containers (keep outer content)
]

# Pages to extract: (source relative path, output filename, flags)
PAGES = [
    ("index.html",                                               "home.md",                              None),
    ("mission-vision/index.html",                               "mission-vision.md",                    None),
    ("about-art-langer/index.html",                             "about-art-langer.md",                  None),
    ("affiliated-faculty/index.html",                           "affiliated-faculty.md",                "sparse"),
    ("industrial-advisory-board/index.html",                    "industrial-advisory-board.md",         None),
    ("the-team/index.html",                                     "the-team.md",                          "sparse"),
    ("ms-strategic-technology-leadership/index.html",           "ms-strategic-technology-leadership.md",None),
    ("ms-in-strategic-technology-leadership-program-boston/index.html", "ms-boston.md",                None),
    ("digital-leadership-program/index.html",                   "digital-leadership-program.md",        None),
    ("ai-machine-learning-leadership-workshop/index.html",      "ai-ml-leadership-workshop.md",         None),
    ("integrated-and-applied-technology-leadership-project/index.html", "integrated-applied-tech-project.md", "sparse-under-development"),
    ("latin-american-directors-ai-it-boot-camp/index.html",     "latin-american-directors-bootcamp.md", "sparse-under-development"),
    ("residency/index.html",                                    "residency.md",                         None),
    ("student-experience/index.html",                           "student-experience.md",                None),
    ("membership/index.html",                                   "membership.md",                        "form-unavailable"),
    ("research/index.html",                                     "research.md",                          None),
    ("publications/index.html",                                 "publications.md",                      None),
    ("in-the-media/index.html",                                 "in-the-media.md",                      "video-placeholders"),
    ("newsletter/index.html",                                   "newsletter.md",                        None),
    ("contact-tmdl/index.html",                                 "contact.md",                           "form-unavailable"),
    ("blockchain/index.html",                                   "blockchain.md",                        None),
    ("cybersecurity-policy-and-practice/index.html",            "cybersecurity-policy-and-practice.md", None),
    ("cybersecurity-threats-and-defenses/index.html",           "cybersecurity-threats-and-defenses.md",None),
    ("database-platform-design-and-innovation/index.html",      "database-platform-design-and-innovation.md", None),
    ("how-to-lead-in-the-experience-economy/index.html",        "experience-economy.md",                None),
    ("managing-the-metaverse/index.html",                       "managing-the-metaverse.md",            None),
    ("raising-capital/index.html",                              "raising-capital.md",                   None),
    ("smart-city-initiatives-business-opportunities/index.html","smart-city-initiatives.md",            None),
    ("quantitative-derivatives-pricing-and-risk-modeling/index.html", "quantitative-derivatives-pricing.md", None),
    ("boston/index.html",                                       "boston.md",                            None),
    ("london/index.html",                                       "london.md",                            None),
    ("break-the-frame/index.html",                              "break-the-frame.md",                   None),
    ("applydl/index.html",                                      "apply-digital-leadership.md",          "form-unavailable"),
    ("blog/index.html",                                         "blog.md",                              None),
]

SKIPPED = [
    ("about-the-center/index.html", "Returns HTTP 404 in the archive — page was missing or broken at crawl time."),
]


def get_title(soup):
    tag = soup.find("title")
    if tag:
        return tag.get_text(strip=True)
    h1 = soup.find("h1")
    if h1:
        return h1.get_text(strip=True)
    return "Untitled"


def strip_chrome(soup):
    # Remove by tag name
    for tag in STRIP_TAGS:
        for el in soup.find_all(tag):
            el.decompose()

    # Remove by id
    for sid in STRIP_IDS:
        el = soup.find(id=sid)
        if el:
            el.decompose()

    # Remove by class (any element carrying that class)
    for cls in STRIP_CLASSES:
        for el in soup.find_all(class_=cls):
            el.decompose()

    return soup


def find_main_content(soup):
    # Try progressively broader selectors; require at least 50 words to accept
    for selector in [
        ("main", {}),
        ("div", {"id": "content"}),
        ("div", {"id": "primary"}),
        ("div", {"class": "entry-content"}),
        ("div", {"class": "page-content"}),
        ("div", {"class": "post-content"}),
        ("article", {}),
        ("div", {"class": "elementor-widget-container"}),
    ]:
        tag, attrs = selector
        el = soup.find(tag, attrs) if attrs else soup.find(tag)
        if el and len(el.get_text(strip=True).split()) >= 50:
            return el

    # Fallback: body
    return soup.find("body") or soup


def clean_markdown(md_text):
    # Collapse 3+ blank lines to 2
    md_text = re.sub(r'\n{3,}', '\n\n', md_text)
    # Remove lines that are only whitespace
    lines = [l.rstrip() for l in md_text.splitlines()]
    md_text = '\n'.join(lines)
    # Strip leading/trailing whitespace
    return md_text.strip()


def extract_page(source_rel, output_filename, flag):
    source_path = os.path.join(ARCHIVE_ROOT, source_rel)
    output_path = os.path.join(OUTPUT_DIR, output_filename)

    if not os.path.exists(source_path):
        return {"status": "missing", "source": source_rel, "output": output_filename, "note": "File not found in archive."}

    with open(source_path, "r", encoding="utf-8", errors="replace") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    title = get_title(soup)
    soup = strip_chrome(soup)
    main = find_main_content(soup)

    md_raw = markdownify.markdownify(
        str(main),
        heading_style="ATX",
        bullets="-",
        strip=["img"],  # skip image tags (archive images won't resolve)
    )
    md_clean = clean_markdown(md_raw)

    # Build frontmatter
    flag_line = f"\nflags: {flag}" if flag else ""
    frontmatter = f"""---
source_path: tmdl_archive/{source_rel}
original_title: {title}
extracted_date: {EXTRACTED_DATE}{flag_line}
---

"""

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(frontmatter + md_clean + "\n")

    word_count = len(md_clean.split())
    return {"status": "ok", "source": source_rel, "output": output_filename, "title": title, "words": word_count, "flag": flag}


def write_report(results, skipped):
    lines = ["# Extraction Report", "", f"**Date:** {EXTRACTED_DATE}", ""]

    ok = [r for r in results if r["status"] == "ok"]
    missing = [r for r in results if r["status"] == "missing"]
    flagged = [r for r in results if r.get("flag")]

    lines += [f"## Summary", "",
              f"- **Extracted:** {len(ok)} pages",
              f"- **Skipped (pre-determined):** {len(skipped)}",
              f"- **Missing from archive:** {len(missing)}",
              f"- **Flagged (low content / forms / video):** {len(flagged)}",
              ""]

    lines += ["## Extracted Pages", ""]
    lines += ["| Output File | Title | Words | Flags |", "|---|---|---|---|"]
    for r in ok:
        flag_str = r.get("flag") or ""
        lines.append(f"| {r['output']} | {r.get('title','?')} | {r.get('words',0)} | {flag_str} |")

    lines += ["", "## Skipped Pages", ""]
    for src, reason in skipped:
        lines.append(f"- `{src}` — {reason}")

    if missing:
        lines += ["", "## Missing from Archive", ""]
        for r in missing:
            lines.append(f"- `{r['source']}` — {r.get('note','')}")

    lines += ["", "## Flag Key", "",
              "- `sparse` — page existed but had very little content",
              "- `sparse-under-development` — page was under construction with placeholder text only",
              "- `form-unavailable` — page contained a form that is non-functional in the static archive",
              "- `video-placeholders` — page contained embedded video that cannot render in the static archive",
              ""]

    report_path = os.path.join(OUTPUT_DIR, "EXTRACTION_REPORT.md")
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

    print(f"  → Report written to {report_path}")


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    results = []

    print(f"Extracting {len(PAGES)} pages...")
    for source_rel, output_filename, flag in PAGES:
        result = extract_page(source_rel, output_filename, flag)
        results.append(result)
        status = result["status"]
        words = result.get("words", 0)
        flag_str = f" [{result.get('flag')}]" if result.get("flag") else ""
        print(f"  [{status.upper():7}] {output_filename} ({words} words){flag_str}")

    print("\nWriting report...")
    write_report(results, SKIPPED)
    print("Done.")


if __name__ == "__main__":
    main()
