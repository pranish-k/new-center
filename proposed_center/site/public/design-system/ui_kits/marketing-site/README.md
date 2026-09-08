# Marketing site UI kit

Click-thru recreation of the **Center for Strategic Learning and Leadership for the Digital Age** marketing site. Mirrors the original Next.js codebase as plain React + JSX so it can be lifted into any prototype.

## Files

```
index.html      Interactive shell — top nav routes between pages in state.
Atoms.jsx       Eyebrow, Button, ArrowLink, Hr.
Nav.jsx         Sticky 64px header, two-line wordmark, 3 links + Contact pill.
Footer.jsx      Three-column sitemap on warm off-white.
Hero.jsx        HomeHero (image bleeds right) + InteriorHero (typographic dark band).
Cards.jsx       ProgramCard, CertificateCard, StatsBar, PartnerStrip, PullQuote.
Pages.jsx       Home, Programs, Leadership, Mission, Contact bodies.
```

## Pages covered
- **Home** — image hero, transition banner, stats bar, programs grid, Langer pull-quote, partner logos.
- **Programs** — interior hero, executive cards, certificate photo grid, CTA.
- **Leadership** — interior hero, bio with metadata column, pull quote, in-action collage.
- **Mission** — typography-only mission/vision body.
- **Contact** — two-column address + note.

## What is *not* recreated (intentionally)
- Mentor grid (filter UI present in `MentorsGrid.tsx` but the headshot folder was not imported — would have been hundreds of files; flagged in the root README).
- Individual `/programs/[slug]` pages — the executive cards link to the index.

## Behaviour
Top-nav links and any `Explore Programs` / `Learn more` button switch pages via React state. Hover states on cards (border navy + lift) and arrow links (3px nudge) match the source.
