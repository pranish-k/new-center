# Decisions Log

> Append-only log of **non-obvious** decisions made during the project and the reasoning behind them. This file is *not* read every session — only when a relevant decision is being revisited or when onboarding someone new to the project.
>
> **What belongs here:** choices where the alternative was reasonable and someone might later ask "why did we do it this way?"
>
> **What does not belong here:** routine progress updates, file names, obvious choices, or anything that's already captured elsewhere.

---

## 2026-04-19 — Defer the 300 mentor pages to a later phase
**Decision:** Do not extract mentor profile pages during Phase 1.
**Alternative considered:** Extract everything in one pass.
**Reasoning:** ~300 pages would consume a large number of tokens without enough payoff at this stage. Mentor content also has high structural regularity, which means it's a better fit for a scripted batch extraction later — not an interactive Claude Code session.

## 2026-04-19 — Use a tiered memory system (BRIEF / STATE / DECISIONS)
**Decision:** Three separate files with distinct jobs instead of a single running log.
**Alternative considered:** One `NOTES.md` or `PROGRESS.md` that Claude Code appends to after every session.
**Reasoning:** A single append-only file grows unboundedly and gets re-read every session, wasting tokens on stale information. Splitting by purpose — stable context (BRIEF), current snapshot (STATE, rewritten each time), and historical reasoning (DECISIONS, read only when relevant) — keeps the per-session token cost low while preserving long-term memory.

## 2026-04-19 — Full-pause extraction workflow for Phase 1
**Decision:** Claude Code produces an archive inventory and waits for explicit approval before extracting any pages.
**Alternative considered:** Extract everything except mentor pages automatically.
**Reasoning:** The contents of the HTTrack archive are unknown to the project owner. A cheap human-in-the-loop review at the inventory stage prevents wasted extraction work on irrelevant pages (old blog posts, pagination artifacts, etc.) and gives the owner a chance to learn what's in the archive without reading every page.
