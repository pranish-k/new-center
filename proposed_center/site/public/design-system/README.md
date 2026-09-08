# Center for Strategic Learning and Leadership for the Digital Age — Design System

A design system for the proposed **Center for Strategic Learning and Leadership for the Digital Age** website at **Columbia University Teachers College**, under the leadership of Dr. Arthur M. Langer.

The Center is a graduate-level academic department (degree, executive, and certificate programs). The design reference bar — set explicitly in the source repo's `DESIGN.md` — is **Columbia GSAPP, MIT Media Lab, Harvard GSD**. This is an editorial, typographic, restrained system. It is **not** a SaaS / Squarespace / startup landing page.

---

## Sources

| Source | Path / link |
|---|---|
| GitHub repo | `pranish-k/new-center` (default branch: `main`) |
| Design source of truth | `proposed_center/site/DESIGN.md` (10kb) — **read this first** |
| UX layer | `proposed_center/UX.md` (provided as project notes) |
| Site code | `proposed_center/site/` (Next.js 16 + Tailwind 4 + React 19) |
| Page content | `proposed_center/content/*.md` (35 markdown files extracted from the existing TMDL site) |
| Imagery + logos | `proposed_center/site/public/` |

The reader is not assumed to have access to the repo — everything needed to build with this system lives in **this** project. References above are for traceability.

---

## Index — what's in this folder

```
README.md                   This file. Overview, content, visual & icon foundations.
SKILL.md                    Cross-compatible Agent Skill descriptor.
colors_and_type.css         Drop-in CSS variables (color, type, spacing, motion).

assets/
  logos/                    Partner logos + WOS logo (PNG)
  photos/                   Hero collage, Art Langer headshot, sessions, courses

ui_kits/
  marketing-site/           Recreations of the Center's marketing site.
    index.html              Interactive click-thru (homepage → programs → leadership)
    Nav.jsx, Footer.jsx, Hero.jsx, Eyebrow.jsx, ProgramCard.jsx,
    CertificateCard.jsx, PullQuote.jsx, StatsBar.jsx, PartnerStrip.jsx,
    InteriorHero.jsx, Button.jsx, Pages.jsx

preview/                    Cards rendered in the Design System tab.
  *.html                    Color, type, spacing, component specimens.
```

---

## Content fundamentals

> "The voice should match a graduate institution, not a course marketplace."
> — UX.md §5

### Tone
- **Authoritative, not eager.** Statement-of-fact cadence. No urgency, no exclamation marks.
- **Specific, not aspirational.** Name the actual companies (Microsoft, JPMorgan, Goldman Sachs). Name the actual residency cities (Boston, London). Name dates and numbers (`230+ industry mentors`, `15+ countries`, `300+ student projects`). Real specificity over vague excellence claims.
- **Editorial, not promotional.** Page titles and section headings should read like a syllabus, not a brochure.

### Voice
- **Active, third-person institutional.** "The Center convenes…" — not "Convening is done at the Center…" Use "we" sparingly, mostly in mission/vision copy. "You" is rare.
- **No hedging marketing words.** The forbidden list (UX.md §5): *world-class, cutting-edge, next-generation, passionate.*

### Casing
- **Sentence case** for body, descriptions, button labels (`Explore Programs`, `Meet Dr. Langer`).
- **Title Case** for proper program names (`MS in Strategic Technology Leadership`, `Digital Leadership Experience`).
- **UPPERCASE TRACKED** for eyebrow labels only — 11px, `0.15em` letter-spacing, never alone (always paired with the gold rule above).

### Pronoun + audience tells
The site speaks **to** prospective executives, **about** the Center.
- "C-Level Executives, Entrepreneurs & Intrapreneurs, Board Members" (program audience block)
- "We envision a future where organizations meet disruption with agility…"
- "Through our partnership with WOS, we extend leadership development…"

### Emoji
**No emoji in body content.** Listed explicitly as anti-pattern: "📍 📚 🏛 — Unprofessional on a graduate institution site." The replacement is small typographic labels.

### Numbers + stats
Always rounded to a meaningful threshold and suffixed with `+`: `230+`, `15+`, `300+`, `25+`. Stats appear in serif navy, label below in 11px tracked uppercase grey.

### Real copy samples (lift these verbatim or as a stylistic anchor)
- Hero subtitle: *"Preparing experienced leaders to meet disruption with agility, drive digital transformation, and shape the future of work."*
- Mission: *"To enable executives to use technology to address strategic challenges of business and to advance their knowledge through collaboration with industry leaders, faculty, and students."*
- Pull quote (Dr. Langer): *"By harnessing the power of hands-on experience and tailored mentorship, the Center empowers its network of learners to practice agility in a tech-driven world."*
- Partner logo band (cream, separates the navy hero from the navy stats bar): *"Our students and mentors come from"*

---

## Visual foundations

### Color
| Token | Hex | Use |
|---|---|---|
| `--c-navy` | `#002868` | Headlines on light, primary CTA fill, links |
| `--c-navy-deep` | `#001a4d` | Primary CTA hover/pressed |
| `--c-dark-panel` | `#1D4F91` | Hero band background (currently used in code) |
| `--c-dark-rich` | `#0a1628` | Hero / overlay (DESIGN.md preference — richer than `#002868`) |
| `--c-gold` | `#b9975b` | 2px eyebrow rule, 3px blockquote bar, active nav underline. **Never** as a fill on large areas. **Never** on text larger than 14px labels (it doesn't pass 4.5:1 contrast). |
| `--c-off-white` | `#f7f6f3` | Section backgrounds (warmer than `gray-50`) |
| `--c-divider` | `#e2e0dc` | All borders, all `<hr>` rules. **Never** `border-gray-100/200` — those read cold and clinical. |
| `--c-text` | `#111111` | Body |
| `--c-text-muted` | `#6b6b6b` | Captions, metadata, descriptions |

The two darks are used differently: `#1D4F91` is the hero panel currently in the code (slightly brighter, friendlier); `#0a1628` is what `DESIGN.md` recommends for richer depth and is used for image overlays (`bg-[#0a1628]/55`). Both are valid; the system exposes both.

### Type
- **Wordmark:** **Trajan Pro** (Adobe; classical inscriptional Roman capital). **Uppercase-only — Trajan has no lowercase glyphs.** Reserved for the institutional wordmark in nav and footer, and for rare ceremonial display use (e.g., diploma-style headers). **Never** body, sentence-case headings, UI labels, or running text. Tracking +0.06em. Files: `fonts/TrajanPro-Regular.ttf`, `fonts/TrajanPro-Bold.otf`. CSS var: `--font-wordmark`.
- **Display:** Georgia, "Times New Roman", serif. Reserved for H1, H2 on content pages, and pull quotes. **Never** in body paragraphs (the previous site mixed Georgia into body and felt heavy).
- **Body:** system-ui sans stack — `system-ui, -apple-system, "Helvetica Neue", sans-serif`. No webfont download. Used for nav, body, labels, captions, all card text.
- **Scale:** Display 48–64 / H2 28–36 / H3 18–20 / body 15 / eyebrow 11 / caption 12–13.
- **Eyebrow pattern is canonical:** 24px × 2px gold rule above an 11px, `0.15em` tracked, uppercase, `#6b6b6b` label. Never just an uppercase string floating alone.

### Spacing & layout
- **Three-tier rhythm** instead of uniform spacing: `py-8` tight (banners, stats), `py-16/20` standard (most sections), `py-24/32` feature (hero, big quote). Uniform `py-20` everywhere is called out as an anti-pattern.
- Containers: `max-w-3xl` (768px) for text-heavy reading; `max-w-6xl` (1152px) for standard sections.
- Card grids gap-6 to gap-8; 2-col content gap-12 (generous).

### Backgrounds
- **No textures, no repeating patterns, no gradients.** White, off-white, or dark panel — that's the entire surface vocabulary.
- **Full-bleed dark hero band** for interior pages: `--c-dark-panel` background, eyebrow + serif H1, no image.
- **Homepage hero** is the one exception that puts an image in the band: Art Langer collage bleeding to the right edge with no border-radius and no padding box around it.
- Image overlays: `#0a1628` at 55–60% opacity for text-on-photo. Never a flat opaque color.

### Imagery treatment
- **No rounded corners** on photos in editorial contexts. Straight edges read as authoritative.
- **No drop shadows** on photos unless floating over a colored background.
- Real-life photos only: cohort dinners, classrooms, executive sessions. The collage of Dr. Langer is reserved for hero + leadership-page-only.
- Color vibe: warm (slightly), unfiltered, journalistic — these are documentary photos, not stylised stock.

### Animation
- **Four animations site-wide.** That's the budget.
  1. Scroll fade-in (`opacity 0→1, translateY(12px→0)`, 600ms `cubic-bezier(0.16, 1, 0.3, 1)`)
  2. Mobile nav overlay (full-height fade, 250ms ease-out)
  3. Card hover (border shifts to navy, `-translate-y-0.5`, 250ms)
  4. Arrow nudge (`translate-x-[3px]` on group hover, 200ms)
- `prefers-reduced-motion` is respected globally — any new animation must check it.

### Hover states
- **Links:** color shift navy → navy-deep, underline removed (links default underlined).
- **Cards:** border `#e2e0dc` → `#002868`, slight lift (`-translate-y-0.5`).
- **Photo cards (certificates):** dark overlay `#0a1628/55` lightens to `#0a1628/45`.
- **Logos in partner strip:** grayscale → full color, opacity 50% → 100%.
- **Primary buttons:** navy fill darkens to `#001a4d`. Outline buttons fill in with navy on hover.

### Press / focus
- No "press" / scale-down state in the system. Buttons rely on color shift.
- Focus visible: keep default `:focus-visible` ring — UX.md flags suppressing it as a violation of the accessibility floor.

### Borders, radii, shadows
- **No `border-radius`.** Anywhere. Cards, photos, buttons — all square. (`--radius: 0` is in the tokens for completeness.)
- **No shadows by default.** A shadow only appears in one place: when a photo or panel is *floating* over a coloured background.
- All borders are `1px solid #e2e0dc` (warm divider). Never `gray-200`.

### Transparency / blur
- Used only for image overlays (`#0a1628/55`–`/60`).
- No glassmorphism, no backdrop-blur, no frosted nav.

### Cards
The only card patterns:
1. **Program card** — image top ~45%, p-7, eyebrow tag, H3, body, arrow link. 1px warm border. Hover: border navy + lift.
2. **Certificate card** — 4:3 photo with `#0a1628/55` overlay, white sans-serif title at bottom-left.
3. **Mentor card** — 64×64 thumbnail + name/title/company, industry tag pills (10px tracked, bordered), expandable bio.
4. **Book / publication card** — 1px border, internal 0.5px gold left-bar, sans body.

All cards: square corners, no shadow.

### Anti-patterns (lifted from `DESIGN.md` §8 — always reject)
- `bg-gray-50 border border-gray-200 p-8` boxes — replace with image-first or warm-bordered cards.
- `text-xs uppercase tracking-widest text-gray-400` floating alone — replace with **gold rule + label** eyebrow.
- Identical flat-blue heroes on every page — typographic variation per page instead.
- Rounded corners + drop shadows on every image.
- Emoji in body copy (📍 📚 🏛).
- Six-link top nav (the system limit is **3 + Contact pill**).
- `border-gray-100/200` dividers (replace with warm `#e2e0dc`).
- Georgia on body paragraphs.
- Uniform `py-20` rhythm.
- "Blue CTA block on every page" — only where it genuinely fits the page flow.

---

## Iconography

There is **no custom icon system or icon font** in the source codebase. This is intentional and aligned with the editorial bar — type does the work icons would otherwise do.

### What is used in place of icons
1. **Typographic markers** instead of bullets:
   - The **gold em-dash** (`—`) prefixes list items in highlights and bullet lists. Code: `<span className="text-[#b9975b]">—</span>`.
   - The **right arrow** (`→`) is used as a literal Unicode character in arrow links and the transition banner — never an SVG. It nudges 3px on hover.
2. **Eyebrow gold rule** — a 24×2px `<span>` above tracked labels acts as an iconographic anchor for every section heading.
3. **Mobile hamburger / close** — the only inline SVG in the entire site. 24×24, stroke-only, weight 1.5, currentColor. Two paths (hamburger lines, close X) that swap on toggle.

### What is **not** used
- **No emoji.** Explicitly forbidden in body content.
- **No icon library** (Lucide, Heroicons, etc.). None imported, none in `package.json`.
- **No image icons** beyond product/partner logos.

### If new icons are needed
The system's preferred order, per UX.md §3.4 ("Reuse a pattern before inventing one"):
1. **First, prefer typography or unicode** (`→ ← — · ✓`). The arrow already does heavy lifting.
2. **If a real icon is needed**, use **Lucide** at stroke-width 1.5 in `currentColor` — it matches the existing hamburger weight. Document the addition in DESIGN.md per the principle "if added, document it here."
3. **Never** introduce filled, multicolour, or rounded-corner icon styles. They will fight the editorial tone.

### Logos
- **WOS logo** (`assets/logos/wos-logo.png`): partner organisation founded by Dr. Langer. Appears in the homepage WOS partnership section, footer (60% opacity, monochrome treatment), and leadership page.
- **Partner logos** (Microsoft, IBM, JPMorgan, Goldman, Deloitte, Boeing, AmEx, AWS, Xerox): appear once on the homepage in a single grayscale strip ("Our students and mentors come from"). Hover reveals colour. Each is `h-10 w-auto`, `object-contain`.
- **The Center has no own logo.** The "wordmark" is a two-line **Trajan Pro** lockup: `COLUMBIA UNIVERSITY · TEACHERS COLLEGE` (10px Trajan Regular, +0.18em tracked, muted gray) over `CENTER FOR TECHNOLOGY MANAGEMENT` (15px Trajan Bold, +0.06em tracked, navy). On dark backgrounds the same lockup reverses to white-on-navy. Always uppercase — Trajan has no lowercase glyphs.

---

## Substitutions & flags

- **Fonts:** **Trajan Pro** (wordmark, in `fonts/`) + **Georgia** (display) + **system-ui** (sans). Trajan is licensed/uploaded; Georgia and system-ui ship with every OS. No additional font files needed. If the user later wants a custom serif (e.g. Söhne, GT Sectra), it would be one variable swap on `--font-display`. Currently flagged: **no Google Font is loaded.** This is intentional per the source.
- **Icon library:** none in the source. The system documents Lucide as the recommended fallback if real icons become necessary, but does not link or import it.
- **Mentor headshots:** the source repo's `public/mentors/` folder was not imported (deferred — would have been hundreds of files for one card pattern). Mentor cards in the UI kit show a serif initial fallback, which is the source's own fallback behaviour.

---

## How to use this system

In a new HTML/JSX artifact:
1. Link `colors_and_type.css` (or copy the `:root` block in).
2. Body inherits sans + #111 + warm white background automatically.
3. Use `.eyebrow` for section labels, `<blockquote class="pull">` for pull quotes, `<hr>` for warm dividers — all styled.
4. For Tailwind 4 setups (the source's stack), copy hex values directly: `bg-[#1D4F91]`, `text-[#b9975b]`, `border-[#e2e0dc]`. The file is also a useful reference.
5. Pull components from `ui_kits/marketing-site/` — they are pre-wired to the tokens.
