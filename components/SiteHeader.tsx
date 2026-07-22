import Link from 'next/link';

// No other pages exist yet (see CLAUDE.md) — kept deliberately to just the
// wordmark and the one booking CTA rather than inventing nav items for
// routes that aren't built, which would read as broken links.
export default function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-sage-100 bg-cream/90 backdrop-blur lg:sticky lg:top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="focus-ring rounded font-display text-xl italic text-ink">
          Optician
        </Link>

        {/*
          Hidden below lg: MobileBookingBar already gives mobile a
          persistent "Book an Appointment" action. Showing it here too
          would stack three copies of the same button (header, hero,
          sticky bar) within one screen on first load.
        */}
        <Link
          href="/book"
          className="focus-ring hidden h-11 items-center justify-center rounded-full bg-terracotta px-6 font-sans text-sm font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terracotta-600 active:bg-terracotta-700 lg:inline-flex"
        >
          Book an Appointment
        </Link>
      </div>
    </header>
  );
}
