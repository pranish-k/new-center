---
name: center-tech-management-design
description: Use this skill to generate well-branded interfaces and assets for the Center for Strategic Learning and Leadership for the Digital Age at Columbia University Teachers College, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the editorial, graduate-academic visual system.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. The most important constraints to honor:
- The reference bar is Columbia GSAPP / MIT Media Lab / Harvard GSD — editorial, typographic, restrained. Never SaaS-startup or Squarespace.
- Use the eyebrow pattern (gold rule + 11px tracked label) for every section heading. Never a floating uppercase string.
- Three-tier spacing rhythm (py-8 / py-20 / py-32). Uniform py-20 is an anti-pattern.
- Square corners. No drop shadows. No emoji in body. No rounded photos.
- Georgia serif for H1/H2 and pull quotes only — never body. Body is system-ui sans.
- Three top-nav links + Contact pill, never more.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand. The site code lives in pranish-k/new-center under proposed_center/site/ (Next.js 16 + Tailwind 4).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
