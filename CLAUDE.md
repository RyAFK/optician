# Optician

## Business reality — read before adding any feature

This is a **single independent practice, not a chain** — that's the core brand
positioning ("Independent eye care, not a chain" in the hero). There is no
second location, no branch data, and none is currently planned.

**Do not build multi-location features** — branch finders, location-page
templates, "book at this branch" flows, distance/nearest-branch logic,
per-branch `LocalBusiness` schema, etc. — unless the user explicitly confirms
a real second location exists and gives real details for it. This has come up
several times as a generic request; the answer has consistently been no. If
it comes up again, don't re-ask — just decline and note this file, then offer
a single-location-appropriate alternative if one makes sense.

## Content honesty rule

Never fabricate real-looking business facts: customer names/quotes, star
ratings, addresses, phone numbers, staff bios, statistics. Where content
doesn't exist yet:
- Mark it unmistakably as placeholder/sample (e.g. the "Sample review" label
  and dashed border on testimonial cards, or the "Testimonial pending"
  wording) — never let it read as real.
- For photography, use a placeholder graphic with a documented swap point
  (see `public/images/README.md`) rather than pretending a real photo exists.
- Structured data (JSON-LD, schema.org) especially must never contain
  invented facts — it's machine-read as truth by search engines.

## Stack & design system

Next.js 14 (App Router) + TypeScript + Tailwind. Fonts via `next/font/google`:
Fraunces (`font-display`, editorial serif for headings) + Inter (`font-sans`,
body/UI). Color tokens (`cream`, `ink`, `sage`, `terracotta`, `stone`) and
type scale (`hero-xl`/`hero-lg`/`hero-md`) live in `tailwind.config.ts` —
extend that file rather than hardcoding one-off colors/sizes in components.
Shared utilities (`.focus-ring`, `.reveal`, `.reveal-rotate`, `.grain`) are in
`app/globals.css`.

## Homepage sections (in order), each its own component

- `components/Hero.tsx` — bold editorial hero, full-bleed photo panel on
  desktop, ghost "30" numeral watermark.
- `components/VisitorPathways.tsx` — four intent-based nav cards.
- `components/ExpertiseSplit.tsx` — clinical vs. eyewear two-column split.
- `components/TrustSection.tsx` — three honesty commitments.
- `components/Testimonials.tsx` — featured + supporting cards on desktop,
  accessible swipeable carousel below `lg`. Data comes from
  `lib/testimonials.ts` (explicitly sample data — see its header comment).
  Accepts an optional `branchId` prop, unused today, kept only so this
  component could serve a future branch page without a rewrite — this is
  not an invitation to build branch pages now (see above).

## Verification habits established in this project

- After any visual/CSS change: `npm run build`, then `next start` (kill any
  prior instance first — it serves a stale build otherwise), then screenshot
  with Playwright (`executablePath: '/opt/pw-browsers/chromium'`,
  `NODE_PATH=/opt/node22/lib/node_modules` since `playwright` isn't a project
  dependency) at mobile/tablet/desktop widths.
- Check `prefers-reduced-motion` behavior for anything animated — verify with
  a real Playwright context (`reducedMotion: 'reduce'`), not just by reading
  the CSS. This project already had one bug where `animation-duration` was
  zeroed but `animation-delay` wasn't, leaving staggered content invisible
  for up to 620ms under reduced motion.
- Check for horizontal overflow at breakpoint edges (e.g. just above/below
  `lg`) when using viewport-relative widths (`vw`) alongside fixed
  `max-width` columns — they can collide at the narrow end of a range even
  when both look fine at the extremes.
