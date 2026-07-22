# Placeholder photography

None of the images below are real photography — they're tinted line-art
washes standing in until authentic practice photos are available. Replace
each and update the matching constant in the named component.

| File | Swap point | Suggested real shot | Crop |
|---|---|---|---|
| `hero-practice.svg` | `HERO_IMAGE_SRC` in `components/Hero.tsx` | Optometrist mid-examination, or the fitting room | 4:5 portrait, 1200×1500px+ |
| `clinical-diagnostics.svg` | `CLINICAL_IMAGE_SRC` in `components/ExpertiseSplit.tsx` | Optometrist at the OCT scanner, or reviewing a retinal scan with a patient | 4:3 landscape, 1200×900px+ |
| `eyewear-styling.svg` | `EYEWEAR_IMAGE_SRC` in `components/ExpertiseSplit.tsx` | Dispenser styling frames with a patient at the mirror, or the frame collection | 4:3 landscape, 1200×900px+ |

Save real photos as `.jpg` or `.webp`, and get consent for any identifiable
patient. Once a constant points at a raster file, remove that image's
`unoptimized` prop in its component (it's only needed for the placeholder
SVGs).
