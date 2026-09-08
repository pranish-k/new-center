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

// Industry and focus are stored as comma-separated strings.
export function splitValues(val: string): string[] {
  return val
    .split(",")
    .map((s) => s.trim().replace(/&amp;/g, "&"))
    .filter(Boolean);
}

// Headshots are served from public/mentors/, but the data file stores them
// with an `images/` prefix from the extraction script.
export function mentorImageSrc(mentor: Mentor): string | null {
  return mentor.image ? `/mentors/${mentor.image.replace("images/", "")}` : null;
}
