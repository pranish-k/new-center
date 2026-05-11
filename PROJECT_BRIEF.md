# PROJECT_BRIEF.md

## Project: TMDL Transition — Northeastern → Columbia Teachers College

---

## 1. Background & Context

**TMDL** (Center at Northeastern University) is a professional development center led by **Dr. Art Langer** (professor and former vice provost at Northeastern). It provides high-level professional training that helps individuals advance in their corporate careers.

**Key transition facts:**
- TMDL at Northeastern is **closing at the end of the 2025–2026 academic year** (May/June 2026).
- Dr. Langer is transferring the center to **Teachers College, Columbia University**, where he is also a professor.
- The transfer has been **approved**, and a new department will be established at Teachers College.
- Dr. Langer is also the founder of **Workforce Opportunity Services (WOS)**, a nonprofit that identifies talent from underserved communities (e.g., veterans) and trains them for tech careers — acting as an outsourcing partner for companies (call center agents, software engineers, etc.).
- **WOS will partner with the new Columbia department**, though the exact integration model is still being defined.

---

## 2. Goals

1. Prototype the concept of the new Columbia Teachers College department.
2. Design and build a website to represent the transition from TMDL (Northeastern) to the new Columbia department.
3. Preserve and carry forward relevant content from the existing TMDL site.
4. Lay groundwork for showing the WOS partnership once integration details are finalized.

---

## 3. Source Material

- **Existing TMDL website:** Originally built on WordPress, extracted via **HTTrack** as a static HTML mirror.
- The mirror lives in this project folder. Content will need to be parsed from HTML files (not a live WordPress database or API).
- **Mentor pages are explicitly out of scope for Phase 1** — there are ~300 individual mentor pages and processing them now would consume too many tokens without enough payoff.

---

## 4. Scope

### In scope (now)
- Extracting structured content from the HTTrack archive: what the center is, what it does, its structure, programs, people (non-mentor), key messaging, etc.
- Saving extracted content as clean, organized **Markdown files** in the `proposed_center/` folder.
- Planning the structure and sitemap of the new Columbia department website.

### Out of scope (for now)
- The 300 individual mentor pages (defer to a later phase).
- Final visual design, branding, and assets for the new site.
- WOS integration details (pending clarification from Dr. Langer).
- Deployment / hosting.

---

## 5. Folder Structure

```
new_center/                   # project root
├── PROJECT_BRIEF.md          # stable context (this file) — read every session
├── STATE.md                  # current snapshot — read every session, rewritten at end of session
├── DECISIONS.md              # non-obvious decisions log — read only when relevant
├── tmdl_archive/             # HTTrack mirror of existing TMDL site (READ-ONLY)
└── proposed_center/          # new Columbia department prototype
    └── content/              # extracted markdown lives here
```

---

## 6. Phases

### Phase 1 — Extract content from TMDL archive (CURRENT)
- Inventory the HTTrack archive. Identify which HTML pages are worth extracting (home, about, programs, leadership, etc.).
- Skip the mentor directory entirely for now.
- For each relevant page, extract the meaningful content (strip WordPress chrome, nav, footers, scripts).
- Save each page as a Markdown file in `proposed_center/content/`, using clear filenames (e.g., `about.md`, `programs.md`, `leadership.md`).
- Produce a short `EXTRACTION_REPORT.md` summarizing: what was extracted, what was skipped and why, any issues encountered.

### Phase 2 — Plan the new site structure
- Propose a sitemap for the new Columbia department based on what TMDL had, plus a placeholder for WOS.
- Identify which extracted content carries over, which needs rewriting, and which is net-new.

### Phase 3 — Build the prototype
- Choose a stack (TBD — likely a static site generator or Next.js).
- Scaffold pages using the extracted Markdown as source content.
- Iterate on design.

### Phase 4 — WOS integration & mentor content
- Incorporate WOS partnership content once details are finalized.
- Revisit the 300 mentor pages with a proper pipeline (probably scripted batch extraction).

---

## 7. Open Questions

- How WOS will formally integrate with the new department (pending).
- Target domain / branding for the Columbia department (pending).
- Whether mentor data should eventually be stored as Markdown, a structured dataset (JSON/CSV), or a CMS.

---

## 8. Working Principles for Claude Code

### Session start
- **Read `PROJECT_BRIEF.md` and `STATE.md` first** at the start of every session.
- Only read `DECISIONS.md` if a specific decision is being revisited or if you need the reasoning behind a past choice.
- Do **not** re-read files inside `tmdl_archive/` unless the current task specifically requires it. The extracted Markdown in `proposed_center/content/` is the working source once Phase 1 is done.

### During the session
- **Preserve source content** — never modify files inside `tmdl_archive/`. Treat it as read-only.
- **Before bulk extraction**, show me an inventory of candidate pages and wait for approval.
- **Ask before expanding scope.** If you see something that looks important but isn't in the current phase, flag it, don't act on it.
- **Keep the mentor directory out** of Phase 1 work entirely.

### Session end
- When I indicate the session is wrapping up, **rewrite `STATE.md`** (don't append) to reflect the new current state. Keep it under ~400 tokens.
- If a **non-obvious decision** was made during the session — one where the alternative was reasonable — append a new dated entry to `DECISIONS.md`. Skip routine progress; that belongs in `STATE.md`, not here.
- If a resolved question is still sitting in the "Open decisions" section of `STATE.md` or the "Open Questions" section of this brief, **remove it**. Stale questions are noise.
