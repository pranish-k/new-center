# Project State

> Short, living snapshot of where the project is right now. Updated at the end of each session. Kept intentionally brief - aim for under 400 tokens. **Rewrite, don't append.**

**Last updated:** 2026-09-08

---

## Current phase
Phase 4 - content depth and partnerships. The site is built and building clean.

## Completed
- Content extracted from `tmdl_archive/` into `proposed_center/content/` (35 markdown files).
- Next.js 16 site live in `proposed_center/site/`: home, mission, leadership, experience, contact, programs index plus 12 program detail pages, mentors directory, and research.
- 243 mentors in `data/mentors/mentors.json` (230 published); directory has filters, URL-synced state, and per-mentor pages.
- Design system published at `site/public/design-system/`; `site/DESIGN.md` is the source of truth.
- Center renamed to **Center for Strategic Learning and Leadership for the Digital Age** (single source: `site/lib/brand.ts`).
- Homepage restructured: mentor network section after the hero, Digital Leadership Experience as sole flagship, remaining workshops folded into the certificates grid, new research activities section.
- New `/research` page covering WOS, corporate partners, projects and publications, and the CxO masterclass.
- J.M. Huber Institute attribution in the footer and on `/mission`.

## Next session's work
- Get corporate partner names from Dr. Langer and replace the placeholder at `/research#partners`.
- Expand the workshop and course catalogue toward the full set (roughly 60).

## Open decisions / blockers
- **Corporate partner list** - blocked on Dr. Langer. Placeholder is live and clearly marked.
- **WOS integration model** - still pending; `/research#wos` carries a "details coming soon" note.
- **Color tokenization** - about 330 raw hex literals, no Tailwind v4 `@theme` block, two competing token sets. Highest-leverage cleanup remaining.
- **Nav** - 4 links plus Contact pill at 90-100px, against the 3-link/64px spec in DESIGN.md §4.

## Notes for next session
- `tmdl_archive/` is read-only - never modify files inside it.
- Do not reuse the nine "Our students and mentors come from" logos as corporate partners; they are different claims.
- Featured homepage mentors are an editable slug list in `site/lib/featured-mentors.ts`.
