# Design System — Center for Technology Management
## Columbia University Teachers College

This file is the single source of truth for all visual and UX decisions on this site.
Before writing any component, check here. Before making a judgment call, add it here.

---

## 1. Design Philosophy

This is a graduate academic institution site. The reference bar is **Columbia GSAPP, MIT Media Lab, Harvard GSD** — not a SaaS startup or a Squarespace template.

That means:
- **Editorial, not promotional.** Space, type, and restraint do the work — not gradients, shadows, or animations.
- **Typographic hierarchy is the design.** If the layout collapsed and you only had text, it should still communicate authority.
- **Images support the content.** They are never decoration. Every image earns its space or it doesn't appear.
- **Earned complexity.** A page should feel considered, not busy. One strong visual move per section, then get out of the way.

What we are explicitly **not** doing:
- Glassmorphism, card hover transforms, gradient overlays on every image
- "AI-generated" uniform section rhythm (every section: eyebrow → h2 → 3 cards → CTA)
- Drop shadows on everything
- Blue hero block + white content block + blue CTA block on every single page

---

## 2. Color

```
Primary (Columbia Blue)   #002868   — Structural anchors, headlines, nav, CTAs
Accent (Gold)             #b9975b   — Thin rules, eyebrow underlines, active states. Never as a fill on large areas.
Dark Surface              #0a1628   — Hero sections, full-bleed dark panels. Richer than flat #002868.
Off-white                 #f7f6f3   — Section backgrounds. Warmer than gray-50, softer than pure white.
Text primary              #111111   — Body copy
Text secondary            #6b6b6b   — Captions, metadata, labels
Divider                   #e2e0dc   — Borders, rules. Warmer than gray-200.
```

**Rules:**
- Gold (`#b9975b`) is used for: horizontal rules above section headings, the vertical rule on blockquotes, active nav underlines. Never as a background fill, never on text larger than 14px labels.
- Navy (`#002868`) is used sparingly on light pages — primarily for headings and CTAs. If a section uses it as a background, the next section must be white or off-white. Never two dark sections back to back.
- `#0a1628` replaces `#002868` as the hero/dark-panel background — it has more depth.

---

## 3. Typography

### Font Stack
```css
--font-display:  "Georgia", "Times New Roman", serif;
--font-sans:     system-ui, -apple-system, "Helvetica Neue", sans-serif;
```

Georgia is reserved for **display use only** — H1s, H2s on content pages, and pull quotes.
Body copy, nav, labels, captions, and card text are all sans-serif.
The previous site mixed Georgia into body paragraphs, which made everything feel heavy.

### Scale
```
Display (H1)      48–64px   font-serif   font-normal   leading-[1.1]   tracking-tight
Section H2        28–36px   font-serif   font-normal   leading-[1.2]
Card H3           18–20px   font-sans    font-semibold leading-snug
Body              15–16px   font-sans    font-normal   leading-[1.7]
Label/eyebrow     11px      font-sans    font-medium   uppercase tracking-[0.15em]
Caption/meta      12–13px   font-sans    font-normal   text-secondary
```

### Eyebrow labels
Every section starts with a label. The pattern is always:
```
gold rule (2px tall, 24px wide) sitting above
11px sans uppercase tracked label in text-secondary
```
Never just uppercase text floating alone — it needs the gold rule to anchor it.

```tsx
<div className="mb-8">
  <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
  <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-sans font-medium">
    What we offer
  </p>
</div>
```

---

## 4. Navigation

### Structure
```
[Columbia University Teachers College]          About   Programs   Contact →
[Center for Technology Management      ]
```

- **Left:** Two-line wordmark. Line 1: institution in 11px tracked gray. Line 2: center name in 15px navy semibold.
- **Right:** Exactly 3 items. `About` → `/mission`. `Programs` → `/programs`. `Contact` as a small pill button.
- No `Home` link — the logo is home.
- No `Leadership`, `Student Experience` in top nav — discoverable from within pages.
- Sticky. White background. 1px warm divider (`#e2e0dc`) at the bottom. 64px tall.

### Active state
Current page link: 2px gold underline (`border-b-2 border-[#b9975b]`). Not a color change.

### Mobile
Hamburger reveals a full-height overlay with the 3 links at large size, not a dropdown panel.

---

## 5. Layout & Spacing

### Max widths
```
Text-heavy content pages     max-w-3xl    (768px)
Standard page sections       max-w-6xl    (1152px)
Full-bleed panels            no max-w — inner content still max-w-6xl
```

### Section spacing rhythm
Not every section gets `py-20`. Use contrast to create rhythm:
```
Tight (stats bar, banners)          py-8  – py-12
Standard section                    py-16 – py-20
Feature (hero, quote, big visual)   py-24 – py-32
```

### Grid
- 2-col content: `gap-12` (generous)
- Card grids: `gap-6` to `gap-8`
- Max 3 cards per row on desktop for content-heavy cards
- Certificate grids: image-first cards, not text tiles

---

## 6. Components

### Page Hero — interior pages
Typographic only. No image in the band.
```
bg-[#0a1628] text-white
Eyebrow: gold rule + tracked text in blue-300/60
H1: font-serif, large, tight leading, max-w-2xl
Subtitle: 15px sans, text-blue-200/70, max-w-xl
```

### Homepage Hero
The one exception — image is present. Left: typographic statement. Right: Art Langer collage bleeding to the right edge of the section, no border-radius, no padding box around it.

### Section Eyebrow + Heading
```tsx
<div className="mb-12">
  <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
  <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-sans font-medium mb-4">Label</p>
  <h2 className="text-3xl font-serif text-[#111111] leading-tight">Heading</h2>
</div>
```

### Program Card (major programs)
Image occupies the top ~45% of the card. Below: tag label, title, one-line description, arrow link. 1px warm border. On hover: border shifts to navy.

### Certificate Card (small programs)
Photo with `bg-[#0a1628]/55` overlay, white title centered at bottom. 4:3 aspect ratio. Hover: overlay lightens slightly.

### Pull Quote / Blockquote
```
Left border: 3px solid #b9975b
Padding-left: 1.5rem
Text: font-serif italic, 20–24px, #111111
Attribution: 13px sans, text-secondary, em-dash prefix
```

### Stats bar
4 numbers across. Large serif number in navy, small tracked sans label below. No boxes, no borders — whitespace is the separator.

### Divider rule
```tsx
<hr className="border-0 border-t border-[#e2e0dc] my-16" />
```
Never `border-gray-100` or `border-gray-200`.

---

## 7. Imagery

### Rules
- Session photos (classrooms, cohort dinners): full width or large panels only. Never shrunk into small card insets.
- Art Langer headshot: Leadership page + homepage quote section only.
- Art Langer collage: Homepage hero + Leadership "In Action" section only.
- Course/stock images: Program detail pages only, where no real photo exists.

### Treatment
- **No rounded corners** on photos in editorial contexts. Straight edges read as authoritative.
- **No drop shadows** on photos unless floating over a colored background.
- Dark overlays for text legibility: `bg-[#0a1628]/60` — never a flat opaque color.

---

## 8. Anti-patterns — Stop Using These

| Pattern | Why | Replace with |
|---|---|---|
| `bg-gray-50 border border-gray-200 p-8` on cards | Gray box grid, zero visual interest | Image-first cards or type-led with warm border |
| `text-xs uppercase tracking-widest text-gray-400` alone | Floats, reads as an afterthought | Gold rule + tracked label |
| Every page hero identical: flat blue band | No variety, pages feel like copies | Typographic heroes, vary scale/weight per page |
| `rounded-sm shadow-xl` on every image | Softens everything, loses authority | No radius, no shadow unless floating |
| Emoji in body copy (📍 📚 🏛) | Unprofessional on a graduate institution site | Small typographic labels |
| Six nav links | Cluttered | Three links max |
| `border-gray-100/200` dividers | Cold and clinical | Warm `#e2e0dc` |
| Georgia on body paragraphs | Heavy, hard to read at length | Sans-serif body, Georgia display only |
| Every section `py-20` | Flat rhythm, no visual breathing | Vary between py-10, py-20, py-32 |
| Blue CTA block at the bottom of every page | Formulaic | Only where it genuinely fits the page flow |

---

## 9. Page-by-Page Notes

### Homepage
- Hero: image bleeds to right edge, no box around collage
- Stats: remove border, let numbers float on white
- Programs: image-first cards
- Quote section: float on white, no gray background box
- Testimonials: pull quote treatment, not gray bordered boxes
- Partner logos: remove gray background section

### Programs index
- Dark typographic hero band
- Certificate grid: photo cards

### Leadership
- Remove emoji metadata
- Bio layout fine — needs typography pass only

### Experience
- Residency section with real photos: keep and improve
- Testimonials: pull quote treatment

### Mission / Contact
- Typography and spacing pass

### All programs/[slug] pages
- Consistent interior template: dark hero band → content → CTA

---

## 10. Implementation Order

1. `globals.css` — CSS vars, font stack, base heading styles
2. `Nav.tsx` — 3 links, active underline, clean height
3. `page.tsx` (homepage) — hero bleed, fix all sections
4. `programs/page.tsx` — image cards, proper hero
5. `leadership/page.tsx` — remove emoji, typography pass
6. `experience/page.tsx` — pull quote testimonials
7. `mission/page.tsx` — typography pass
8. All `programs/[slug]/page.tsx` — consistent template