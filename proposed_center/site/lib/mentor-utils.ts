// Pure mentor helpers, safe to import from client components.
// Filesystem loading lives in lib/mentors.ts, which is server-only.

export type Mentor = {
  id: number;
  slug: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  focus: string;
  location: string;
  linkedin: string;
  bio: string;
  image: string;
  published?: boolean;
};

// The extracted source data is HTML-encoded; names, titles and companies all
// need decoding before display or comparison.
export function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

// Industry and focus are stored as comma-separated strings.
export function splitValues(val: string): string[] {
  return val
    .split(",")
    .map((s) => decodeEntities(s.trim()))
    .filter(Boolean);
}

// Headshots are served from public/mentors/, but the data file stores them
// with an `images/` prefix from the extraction script.
export function mentorImageSrc(mentor: Mentor): string | null {
  return mentor.image ? `/mentors/${mentor.image.replace("images/", "")}` : null;
}
