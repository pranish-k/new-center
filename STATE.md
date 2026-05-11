# Project State

> Short, living snapshot of where the project is right now. Updated at the end of each session. Kept intentionally brief — aim for under 400 tokens. **Rewrite, don't append.**

**Last updated:** 2026-04-19

---

## Current phase
Phase 1 — Extract content from the TMDL archive. Not yet started.

## Completed
- Project brief, phase 1 prompt, and memory system drafted.
- Folder structure confirmed: `new_center/` (root), with `tmdl_archive/` (source) and `proposed_center/` (target).

## Next session's work
- Run the Phase 1 prompt in Claude Code.
- Review the archive inventory it produces.
- Approve which pages to extract.

## Open decisions / blockers
- WOS integration model (pending clarification from Dr. Langer).
- Tech stack for the new site prototype (to be decided in Phase 3).
- Long-term storage format for the 300 mentor pages (Markdown, structured data, or CMS — defer until Phase 4).

## Notes for next session
- Mentor directory stays out of scope until Phase 4.
- `tmdl_archive/` is read-only — never modify files inside it.
