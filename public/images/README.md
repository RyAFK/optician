# Editorial image system

None of the images below are real photography — they're tinted line-art
washes standing in until authentic practice photos are available. The whole
site's photography runs through `components/EditorialImage.tsx`, which reads
its aspect ratio, `sizes`, and base dimensions from `lib/images.ts`'s
`IMAGE_CATEGORIES` — so the same *kind* of shot always reads at the same
aspect ratio wherever it appears, rather than each component picking its own
ratio ad hoc.

## Categories

| Category | Ratio | Rationale | Status |
|---|---|---|---|
| `examination` | 4:5 portrait | An eye exam in progress — an intimate, people-first moment | **In use** — Hero, ExpertiseSplit |
| `styling-consultation` | 4:5 portrait | A dispenser and patient choosing frames together | **In use** — ExpertiseSplit |
| `team-portrait` | 3:4 portrait | A portrait of a team member | **In use** — TrustSection |
| `exterior` | 16:9 landscape | Establishing shot of the practice frontage | Reserved — no page needs it yet |
| `interior` | 4:3 landscape | Waiting area, testing room, or dispensing floor | Reserved — no page needs it yet |
| `eyewear-detail` | 1:1 square | Close-up of frame or lens craftsmanship | Reserved — no page needs it yet |
| `customer-interaction` | 4:5 portrait | A candid moment between staff and patient | Reserved — no page needs it yet |

The four "reserved" categories are wired into the system (aspect ratio,
`sizes`, base dimensions all defined in `lib/images.ts`) so a future page —
an About page, a expanded gallery — can drop in `<EditorialImage
category="exterior" .../>` and get the right shape and responsive behaviour
immediately, without inventing a new ad hoc image treatment.

## Current placeholder files

| File | Swap point | Suggested real shot |
|---|---|---|
| `hero-practice.svg` | `HERO_IMAGE_SRC` in `components/Hero.tsx` | Optometrist mid-examination, or the fitting room (desktop/default crop) |
| `hero-practice-mobile.svg` | `HERO_IMAGE_MOBILE_SRC` in `components/Hero.tsx` | The **same scene, shot or cropped tighter** on the subject for small screens — genuine art direction, not a resize of the desktop crop |
| `clinical-diagnostics.svg` | `CLINICAL_IMAGE_SRC` in `components/ExpertiseSplit.tsx` | Optometrist at the OCT scanner, or reviewing a retinal scan with a patient |
| `eyewear-styling.svg` | `EYEWEAR_IMAGE_SRC` in `components/ExpertiseSplit.tsx` | Dispenser styling frames with a patient at the mirror, or the frame collection |
| `team-portrait.svg` | `TEAM_IMAGE_SRC` in `components/TrustSection.tsx` | A real, consented portrait of an actual optometrist or dispenser — **do not** invent a name or bio to pair with it (see `CLAUDE.md`) |

Save real photos as `.jpg` or `.webp`. Once a slot points at a raster file,
you can drop the `unoptimized` handling — `EditorialImage` only sets it for
`.svg` sources, so it clears itself automatically.

## What `EditorialImage` gives you for free

- **Consistent aspect ratio per category** (above), with an escape hatch
  (`wrapperClassName`) for bespoke layouts like the hero's full-bleed panel.
- **Responsive `sizes`/`srcset`** via `next/image`, with a category default
  you can override per instance.
- **Lazy loading below the fold** — this is `next/image`'s own default;
  pass `priority` only for the one above-the-fold hero image.
- **Art-directed mobile crops** — pass `mobileSrc` for a genuinely different
  composition below `sm` (640px), rendered through a real `<picture>` +
  `getImageProps` pair so the browser fetches only the crop that matches,
  not both.
- **A subtle fade-in on load** (`transition-opacity`), which the project's
  global `prefers-reduced-motion` override in `app/globals.css` already
  collapses to near-instant for users who've asked for less motion.
