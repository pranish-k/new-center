# UX.md — Decisions guide for the new Center site

This doc is the **thinking layer** above the visual system. It exists to help anyone (you, a collaborator, an AI agent) make good UX judgment calls on this project — what to put on a page, how to organize it, when to add a new pattern, when to reuse an existing one.

It is **not** a style guide. The visual system (colors, type scale, components, anti-patterns) lives in **[proposed_center/site/DESIGN.md](proposed_center/site/DESIGN.md)** — that file is the source of truth for *how things look*. This file covers *why and what*.

For project background (the Northeastern → Columbia transition, WOS, scope), see [PROJECT_BRIEF.md](PROJECT_BRIEF.md). For current state, [STATE.md](STATE.md). For past trade-offs, [DECISIONS.md](DECISIONS.md).

---

## 1. Who the site is for

The site has three distinct audiences. Most pages serve one as primary and one as secondary. Naming them keeps decisions honest — "would a 50-year-old VP looking for an exec program actually click this?" is a more useful question than "is this on-brand?"

| Audience | Who they are | What they want | What they don't want |
|---|---|---|---|
| **Prospective executives** (primary) | C-suite, post-MBA, mid-to-late career professionals exploring exec ed and certificates | Proof of credibility, clear program info, a sense the experience is serious | Marketing fluff, gamified UI, anything that reads as undergrad-targeted |
| **Industry partners & faculty** (secondary) | Companies sending cohorts, mentors, advisory board members, prospective faculty | Mission, leadership credibility, partnership pathways | A consumer-product feel; they need to see institutional weight |
| **Internal / Columbia stakeholders** (tertiary) | TC administrators, peer departments, accreditation reviewers | Clarity that this is a real Columbia academic department, not a vendor microsite | Anything that looks like a startup landing page |

**Rule:** When in doubt about a UX choice, ask "does this read as Columbia GSAPP / MIT Media Lab / Harvard GSD?" If the answer involves the words "fun," "playful," or "engaging in a Squarespace way," reconsider. (DESIGN.md §1 calls these out as the reference bar.)

---

## 2. The five tasks the site exists to support

Every page should be in service of one of these. If a section doesn't help with any of them, cut it.

1. **Establish credibility** — that this is a real Columbia department led by a real academic, not a rebrand of a vendor program. (Hero, leadership, mission, partner logos.)
2. **Help a prospective student find the right program** — surface programs with enough detail to self-qualify in or out within ~30 seconds. (Programs index, program detail pages.)
3. **Give a partner a way to engage** — mentors, employers, sponsors. (Mentors, contact, partnership content once WOS integration lands.)
4. **Convey the experience** — what it actually feels like to learn here (cohorts, residencies, mentors). (Experience page, photography on program pages.)
5. **Make contact effortless** — no labyrinth before reaching a human. (Contact, the pill button in nav.)

---

## 3. Decision principles

These are the heuristics to apply when there isn't an obvious right answer. They are deliberately short — long principles get ignored.

### 3.1 Editorial over promotional
Lead with content. If the page works as plain text with no images and no color, the structure is right. Then add the one visual move that earns its space. (DESIGN.md §1 calls this **earned complexity** — the principle source-of-truths there.)

### 3.2 One job per page
Pick the single thing the page must do, and rank everything else against it. The homepage's job is "establish credibility + route to programs," not "show every initiative." If you can't say the one job in a sentence, the page isn't ready.

### 3.3 Information scent over surprise
Links and buttons should look like what they are. Don't make the user wonder if a card is clickable, or where an arrow goes. Hover states are confirmation, not the discovery mechanism.

### 3.4 Reuse a pattern before inventing one
Before adding a new component or layout, check whether one of these covers it:
- **Section eyebrow + heading** (gold rule + tracked label + serif H2) — for any major section
- **Program card** — for anything that's a structured offering
- **Pull quote** — for any single human voice (testimonial, mission statement, faculty quote)
- **Stats bar** — for any cluster of numbers
- **Interior page hero** (typographic, dark) — for any non-homepage entry point

A new pattern is justified only when none of these fits *and* the new pattern will be used on at least 2 pages. One-off components are a smell.

### 3.5 Whitespace is a tool, not a default
The site uses **rhythm** rather than uniform spacing — `py-8` for tight, `py-20` for standard, `py-32` for feature (DESIGN.md §5). When every section is the same height, the page reads flat. Vary deliberately to signal what's important.

### 3.6 No animation for animation's sake
Four animations exist site-wide: scroll fade-in, mobile nav overlay, card hover (border + slight lift), arrow nudge. These are the budget. Adding a fifth requires a real reason - and if added, document it here and in DESIGN.md.

**Fifth animation (approved): the homepage mentor rotation.**
The mentor network is the Center's strongest proof, and 230 mentors cannot be
represented by a fixed four. The homepage row shows four at a time from a pool
of sixteen and crossfades to the next group every six seconds.
Conditions it must keep meeting, or it comes out:
- `prefers-reduced-motion` disables rotation entirely; the first four stay put.
- Rotation pauses on hover and whenever focus is inside the row, so a card never
  changes under the pointer and a link never moves out from under the keyboard.
- An explicit Pause control is present (WCAG 2.2.2 Pause, Stop, Hide).
- Opacity only. No movement, no scale, nothing that competes with the hero.
- It is the only rotating element on the site. A second one is not approved.

### 3.7 Design for skim, then for read
Most visitors will skim. Headings, eyebrows, pull quotes, stats, and arrow links must communicate the page's substance on their own. Body paragraphs are for the smaller group that already decided to invest.

---

## 4. Page-by-page intent

Quick reference: what each page is *for* (the job-to-be-done), not what it contains. Pair this with the implementation notes in DESIGN.md §9.

| Page | Primary job | Primary audience | Success looks like |
|---|---|---|---|
| `/` Homepage | Establish credibility + route to programs | Prospective execs | Visitor knows this is Columbia, knows what's offered, clicks into a program |
| `/mission` | Convey institutional purpose | Partners, internal stakeholders | Reads as a serious mission, not marketing copy |
| `/programs` | Help user find the right program fast | Prospective execs | User gets to a program detail page in ≤2 clicks |
| `/programs/[slug]` | Self-qualify and contact | Prospective execs | User either signs up to talk or correctly rules it out |
| `/mentors` | Show depth of network | Partners, prospective execs | User finds a relevant mentor (filter actually used) |
| `/leadership` | Establish academic credibility | All audiences | User trusts the people behind this |
| `/experience` | Convey what learning here feels like | Prospective execs | User gets a vivid sense of cohorts/residencies |
| `/contact` | Get the user to a human | All audiences | Form submitted, or direct email used |

---

## 5. Content & voice

The voice should match a graduate institution, not a course marketplace. Concretely:

- **Authoritative, not eager.** "Cohorts begin each fall." Not "Apply today — limited spots!"
- **Specific, not aspirational.** Name the actual companies mentors come from. Name the actual residency cities. Real specificity outperforms vague claims of excellence.
- **Active voice for what the Center does.** "The Center convenes…" not "Convening is done at the Center…"
- **Avoid:** exclamation marks, "world-class," "cutting-edge," "next-generation," "passionate," emoji in body content.
- **Use:** named programs, named people, named outcomes, dates, numbers.

Page titles and section headings should read like a syllabus, not a brochure: precise, descriptive, lowercase exception only when stylistically intentional.

---

## 6. Accessibility floor

These are not aspirations — they are the floor. A change that violates them needs a documented reason.

- **Color contrast ≥ 4.5:1** for all body text and ≥ 3:1 for large text (≥18px or bold ≥14px). The navy `#002868` and primary text `#111111` on the off-white `#f7f6f3` both clear this; gold `#b9975b` does not — that's why DESIGN.md restricts gold to ≤14px labels and rules.
- **All interactive elements reachable by keyboard** with a visible focus ring. Don't suppress `:focus-visible`.
- **All images have meaningful `alt` text** (or `alt=""` when purely decorative). Mentor photos: name. Hero collages: descriptive context.
- **`prefers-reduced-motion` respected** — already done in `FadeIn.tsx`. Any new animation must check this.
- **Heading levels in order** (no skipping h2 → h4). The visual size is set by the type scale, not the heading level.
- **Form labels visible**, not placeholder-only. Contact form should have explicit `<label>` elements.

---

## 7. Information architecture rules

- **Top nav is exactly 3 links + Contact pill.** (DESIGN.md §4.) Adding a 4th requires removing one or moving it into a page.
- **Discovery happens within pages, not in the nav.** Leadership, Experience, Mentors are reached from the homepage and contextual links — not surfaced globally.
- **No breadcrumbs in the current scope.** Page hierarchy is shallow enough that breadcrumbs would be cargo-culted.
- **Footer is a sitemap, not a second nav.** Group links by purpose (About / Programs / Connect), include legal and contact, no duplication of the top nav structure.
- **External links open in the same tab by default.** New tabs only for downloads or when the user is mid-task and would lose state.

---

## 8. When to update this file

Add to this file when:
- A new audience, page, or major flow is introduced — update §1, §2, §4.
- A UX trade-off is made where the alternative was defensible — record the reasoning briefly. (Visual trade-offs go in DESIGN.md instead.)
- A principle in §3 turns out to be wrong in practice — rewrite it, don't bury it under exceptions.

Don't add to this file for:
- Visual specifics — those go in DESIGN.md.
- Implementation details — those go in code or DECISIONS.md.
- Project status — that goes in STATE.md.

The test for whether something belongs here: *would a new person making a UX decision next month be measurably better off knowing this?* If yes, write it. If it's just current-task context, leave it out.

---

## 9. Open UX questions

Things genuinely undecided that will shape future UX choices. Resolve and remove as they're answered.

- **WOS integration surface** — once the partnership model is defined ([PROJECT_BRIEF.md](PROJECT_BRIEF.md) §1), where does it live? A standalone page? A section on `/mission`? A program track? This decision will reshape the IA.
- **Mentor page depth** — currently a filterable grid. Do individual mentors need their own pages (300 of them, deferred per [DECISIONS.md](DECISIONS.md))? If yes, what's on those pages, and does that change the grid's role?
- **Application / inquiry flow** — does the contact form become a more structured "Request information" form per program? If yes, every program page needs the same flow.
- **Search** — at what point does the site need real search? Probably not at current scope; revisit when content roughly doubles.
