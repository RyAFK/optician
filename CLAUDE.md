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
- `components/ServiceFinder.tsx` — filterable list of services (data from
  `lib/services.ts`), the single-location equivalent of a branch/service
  finder — see the business-reality note above for why there's no
  location filter.
- `components/TrustSection.tsx` — three honesty commitments, plus a small
  team-portrait moment reinforcing "same optometrist every visit".
- `components/Testimonials.tsx` — featured + supporting cards on desktop,
  accessible swipeable carousel below `lg`. Data comes from
  `lib/testimonials.ts` (explicitly sample data — see its header comment).
  Accepts an optional `branchId` prop, unused today, kept only so this
  component could serve a future branch page without a rewrite — this is
  not an invitation to build branch pages now (see above).
- `components/EyewearBrands.tsx` — curated collections grouped by
  characteristic (Minimalist/Colourful/Handcrafted/Lightweight), not named
  brands: naming a specific real-sounding brand would be a factual claim
  about who this practice stocks, the same category of thing the honesty
  rule above forbids. Each card is honestly labeled "Brand partner — to be
  added". Static grid at `sm`+; a user-driven `scroll-snap` row on mobile
  (no autoplay — the brief this was built from explicitly said not to do a
  generic scrolling logo strip). Takes a `showCta` prop (default `true`) —
  pass `false` when embedding it on `/eyewear` itself, since its own
  "Explore Our Eyewear" CTA would otherwise just link to the current page.
  Data lives in `lib/eyewearCollections.ts`, shared with the per-collection
  pages below — don't fork a second copy.

## Eyewear collection pages (`/eyewear/[collection]`)

`app/eyewear/[collection]/page.tsx` is a dynamic route (`generateStaticParams`
prerenders all four) driven by `lib/eyewearCollections.ts`. Each collection
now has `styles`: 4 entries of `{ label, shape }`, e.g. `{ label: 'Thin round
metal', shape: 'round' }`. These are **descriptive shape/material previews,
never specific product names, brands, or prices** — a request came in once
with a reference screenshot from an unrelated e-commerce-style optician demo
showing named products ("Skyline Aviator", $148, etc.); the layout structure
(breadcrumb, header, collection-switcher pills, product grid) was worth
reusing, but the specific brand/product/price content was not — that's
exactly the kind of fabricated business fact the honesty rule above forbids,
and this is an appointment-led boutique practice, not a self-checkout
storefront (see the "not a sales assistant" positioning already established
in `ExpertiseSplit`). Each style card links to `/contact` ("Ask about this
style") rather than a buy button. `components/FrameShapeIcons.tsx` renders
the four shapes (`round`/`rectangle`/`cat-eye`/`browline`) as plain inline
SVGs — same pattern as the small line icons elsewhere in the site
(`VisitorPathways`, `TrustSection`), not routed through `EditorialImage`,
since they're decorative marks, not photography.

## Site pages / routes

Every internal link on the site resolves to a real page — there is no more
"referenced ahead of the page being built." Non-homepage pages share two
building blocks rather than each rolling their own header/form:

- `components/PageHero.tsx` — the sub-page equivalent of `Hero.tsx`. The
  homepage Hero's full-bleed asymmetric layout and ghost-numeral watermark
  are a deliberate one-off "bold moment," not a pattern to repeat — PageHero
  instead reuses the centered eyebrow/heading/intro rhythm every homepage
  section already uses. Optional `image` prop takes an `ImageCategory`.
- `components/RequestForm.tsx` — used by `/book` and `/contact`. **No
  booking system or inbox exists behind this** — submitting only shows an
  honest "we'll be in touch" confirmation state client-side; it does not
  persist anywhere. Wire it to a real backend/email service before launch,
  and don't change the confirmation copy to imply an instant confirmed
  booking in the meantime (see content-honesty rule).

Pages:
- `/book` — `RequestForm` with the service-type field, submit button carries
  `data-primary-cta`. `MobileBookingBar` and its own header CTA hide on this
  page specifically (see below) — a floating "Book an Appointment" bar over
  the booking form itself is circular.
- `/contact` — "Ask a Question", `RequestForm` without the service field.
- `/eye-care`, `/eyewear`, `/contact-lenses`, `/eye-concerns` — each reuses
  the relevant established facts/copy from `ExpertiseSplit`,
  `VisitorPathways`, and `lib/services.ts` rather than inventing new
  specifics, ends with an `AppointmentPrompt` (primary CTA + one contextual
  secondary linking to a related page). `/eyewear` also embeds
  `EyewearBrands` (with `showCta={false}`), which is what the
  `/eyewear#minimalist` etc. anchors from the homepage teaser resolve to.
- `/services` — `PageHero` + the same `ServiceFinder` component used on the
  homepage.

## Image system

All photography renders through `components/EditorialImage.tsx`, driven by
`lib/images.ts`'s `IMAGE_CATEGORIES` — a shared aspect ratio, `sizes`, and
base dimensions per *kind* of shot. All seven categories are now in use:
examination, styling-consultation and team-portrait on the homepage;
exterior (`/services`), interior (`/eye-concerns`), customer-interaction
(`/contact-lenses`), and eyewear-detail (`EyewearBrands`) on the pages built
to complete the site. Extend `IMAGE_CATEGORIES` rather than hardcoding a
one-off aspect ratio in a component — and remember to add any new file glob
to `tailwind.config.ts`'s `content` array if you introduce a category whose
Tailwind classes wouldn't otherwise appear literally in a scanned file (see
the Tailwind content-scanning note below). See `public/images/README.md` for
the full category table, current placeholder files and their swap points,
and how the art-directed mobile crop (`mobileSrc`) and reduced-motion-safe
fade-in work.

## Appointment CTA journey

Primary label is always exactly **"Book an Appointment"**, linking to
`/book`. Every primary CTA carries a `data-primary-cta` attribute — don't
drop it when editing one, `MobileBookingBar` depends on it.

- `components/SiteHeader.tsx` — site-wide, sticky at `lg`+. Wordmark + the
  primary CTA, nothing else — still deliberately minimal even now that more
  pages exist, to avoid a nav menu that just repeats the footer-less site's
  small page count. The CTA is hidden below `lg` — `MobileBookingBar`
  already covers mobile.
- `components/MobileBookingBar.tsx` — fixed bottom bar, `lg:hidden`. Single
  action only; no click-to-call button, since no real phone number exists
  anywhere in this project (see content-honesty rule above). Auto-hides
  itself (IntersectionObserver on `[data-primary-cta]`) whenever a primary
  CTA already on the page is in view, so it doesn't sit directly under an
  identical button — and doesn't render at all on `/book` (checks
  `usePathname()`), since that page's own submit button already is the
  booking action.
- `components/AppointmentPrompt.tsx` — reusable quiet one-line CTA strip
  (message + primary + one contextual secondary link) for between major
  sections. Used after `VisitorPathways` and after `ExpertiseSplit` on the
  homepage, and at the end of every service page (`/eye-care`, `/eyewear`,
  `/contact-lenses`, `/eye-concerns`). Deliberately not a boxed/colored
  block — it's meant to read as a rhythm beat, not another competing
  section.

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
- If a component renders visually blank despite the DOM/JS looking correct,
  check whether its Tailwind classes actually made it into the compiled CSS
  (`grep` the class name in `.next/static/css/*.css`) before assuming a
  logic bug. `tailwind.config.ts`'s `content` globs only scan `app/`,
  `components/`, and `lib/` — a class name that exists only as a string in
  some other file (or is built dynamically in a way the scanner can't see)
  silently gets no CSS rule at all, even though the className is applied
  correctly at runtime. This already happened once: `aspect-square` lived
  only in `lib/images.ts`'s `IMAGE_CATEGORIES` defaults, which wasn't in the
  content glob yet, and every other category's default happened to be
  re-typed literally in a component's override too, so it went unnoticed
  until the first category used without one.
