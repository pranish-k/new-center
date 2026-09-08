# Design System — Center for Strategic Learning and Leadership for the Digital Age
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
Primary (Columbia Blue)   #002868   — THE brand color. All dark surfaces: heroes,
                                      navy bands, feature cards, stats bar, CTAs,
                                      headlines, nav.
Accent (Gold)             #b9975b   — Thin rules, eyebrow underlines, active states. Never as a fill on large areas.
Dark accent               #0a1628   — Dark text on gold buttons, and the hero photo
                                      caption card only. NOT a section background.
Off-white                 #f7f6f3   — Section backgrounds. Warmer than gray-50, softer than pure white.
Text primary              #111111   — Body copy
Text secondary            #6b6b6b   — Captions, metadata, labels
Divider                   #e2e0dc   — Borders, rules. Warmer than gray-200.
Navy hover                #001a4d   — Hover state for navy fills and links only.
Gold hover                #a8864a   — Hover state for GoldButton only.
TC logo                   #002360   — Official Teachers College mark. Do not alter.
```

Nothing outside this list. `#1D4F91`, `#f5f4f2`, `#d8d4cc`, `#9c9c9c` and `#7a6235`
were drift and have been removed.

**Rules:**
- Gold (`#b9975b`) is used for: horizontal rules above section headings, the vertical rule on blockquotes, active nav underlines. Never as a background fill, never on text larger than 14px labels.
- Navy (`#002868`) is used sparingly on light pages — primarily for headings and CTAs. If a section uses it as a background, the next section must be white or off-white. Never two dark sections back to back.
- `#002868` is the brand navy and is the correct background for every dark section. Do not substitute `#0a1628`; it is an accent for dark-on-gold text and the hero caption card only.

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
[Center for Strategic Learning and Leadership for the Digital Age      ]
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
Site chrome + heroes + card sections   max-w-7xl px-8   (1280px)
Text-heavy content pages               max-w-3xl px-6   (768px)
Full-bleed panels                      no max-w — inner content still max-w-7xl
```

Nav, Footer, InteriorHero, ProgramHero and StatsBar all use `max-w-7xl px-8` so
every page shares one left rule. `max-w-4xl` and `max-w-6xl` are not used.

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
bg-[#002868] text-white
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
Image occupies the top ~45% of the card. Below: tag label, title, one-line description, arrow link. 1px warm border. On hover the card lifts 3px and the image scales slightly. The border colour does not change - motion carries the affordance.

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
4 numbers across. Large serif number in navy, small tracked sans label below.
Default is unboxed, whitespace as the separator. The `boxed` variant frames them
on cream with a gold top rule and hairline separators - use it where the numbers
need to read as one deliberate block, as on the homepage mentor section.

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
- Dark overlays for text legibility: `bg-[#002868]/85` — never a flat opaque color.

---

## 8. Anti-patterns — Stop Using These

| Pattern | Why | Replace with |
|---|---|---|
| `bg-gray-50 border border-gray-200 p-8` on cards | Gray box grid, zero visual interest | Image-first cards or type-led with warm border |
| `text-xs uppercase tracking-widest text-gray-400` alone | Floats, reads as an afterthought | Gold rule + tracked label |
| Every page hero identical: flat blue band | No variety, pages feel like copies | Typographic heroes, vary scale/weight per page |
| `rounded-sm shadow-xl` on every image | Softens everything, loses authority | No radius, no shadow unless floating |
| Border colour change on card hover | Reads as a form field gaining focus | Lift + image scale only |
| Emoji in body copy (📍 📚 🏛) | Unprofessional on a graduate institution site | Small typographic labels |
| Six nav links | Cluttered | Three links max |
| `border-gray-100/200` dividers | Cold and clinical | Warm `#e2e0dc` |
| Georgia on body paragraphs | Heavy, hard to read at length | Sans-serif body, Georgia display only |
| Every section `py-20` | Flat rhythm, no visual breathing | Vary between py-10, py-20, py-32 |
| Blue CTA block at the bottom of every page | Formulaic | Only where it genuinely fits the page flow |

---

## 9. Page-by-Page Notes

### Homepage
The mentor row is the site's one piece of moving content. It shows four mentors
from a pool of sixteen (`lib/featured-mentors.ts`) and crossfades every six
seconds, pausing on hover and focus and disabled entirely under
`prefers-reduced-motion`. Full conditions in UX.md §3.6.

Two rules when editing the pool: keep its length a multiple of four, and only
add mentors whose headshot is at least 600px wide - at four across the cards
render about 286px, and most of the 250 headshots are under 250px.

Section order is fixed:

1. Hero - navy, image bleeds to right edge, no box around the photo
2. Industry mentor network - stats float on white (never navy here; the hero
   above is already navy), plus six featured mentors from `lib/featured-mentors.ts`
3. Partner logo band - cream, "Our students and mentors come from"
4. What we offer - the Digital Leadership Experience alone, as a `NavyFeatureCard`
5. Workshops & certificates - `TintedCard` grid, workshops first
6. Research activities - four strands linking into `/research`
7. Director quote - full-bleed photo band
8. Student voices - pull quote treatment, not gray bordered boxes

Only one program is featured under "What we offer". Everything else lives in the
workshops and certificates grid. If a second program is ever promoted to the
flagship slot, the first has to come out.

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

---

## 11. Backlog

### Done
- Center renamed to "Center for Strategic Learning and Leadership for the Digital Age"
  (single source: `lib/brand.ts`)
- J.M. Huber Institute attribution - footer brand block and a `/mission` section
- Industry mentor network section on the homepage
- Digital Leadership Experience as the sole flagship, on `/` and `/programs`
- Remaining workshops folded into the certificates grid
- Research activities section plus the `/research` page (WOS, corporate
  partners, projects and publications, CxO masterclass)

### Open
- **Corporate partner names** for `/research#partners` - currently a marked
  placeholder. Do not reuse the nine logos from the "Our students and mentors
  come from" band; that band is a statement about where people come from, not
  a claim of partnership.
- **Color tokenization** - roughly 330 raw hex literals across the app, no
  Tailwind v4 `@theme` block, and two competing token sets (`globals.css`
  `:root` versus `public/design-system/colors_and_type.css`). Consolidating
  these is the highest-leverage cleanup left.
- **Nav** - currently 4 links plus the Contact pill at 90–100px tall, against
  the 3-link, 64px spec in §4. `/research` was deliberately added to the footer
  rather than the nav to avoid making this worse.
- Remaining workshops and courses beyond the current 11 (the full catalogue is
  closer to 60).Nutaniz, Field AI, Tulles 