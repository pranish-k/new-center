import { readFileSync } from "fs";
import path from "path";
import { FEATURED_MENTOR_SLUGS } from "./featured-mentors";
import type { Mentor } from "./mentor-utils";

export type { Mentor };

// Mentor records live outside the Next app root, alongside the extraction script.
const MENTORS_JSON = path.join(process.cwd(), "..", "data", "mentors", "mentors.json");

export function getMentors(): Mentor[] {
  const all = JSON.parse(readFileSync(MENTORS_JSON, "utf-8")) as Mentor[];
  // Records with `published: false` stay in the data file but are hidden from the site.
  return all.filter((m) => m.published !== false);
}

// Returns the featured mentors in the order listed in featured-mentors.ts,
// silently dropping any slug that no longer resolves.
export function getFeaturedMentors(): Mentor[] {
  const bySlug = new Map(getMentors().map((m) => [m.slug, m]));
  return FEATURED_MENTOR_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (m): m is Mentor => Boolean(m),
  );
}
