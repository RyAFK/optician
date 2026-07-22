'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Mobile-only persistent booking action. Deliberately a single action, not
// a click-to-call button too: there's no real phone number established
// anywhere in this project yet (see CLAUDE.md — never fabricate contact
// details), so a second button here would either be fake or a dead end.
//
// Hides itself whenever a primary "Book an Appointment" CTA already on the
// page (Hero, an AppointmentPrompt strip, the Testimonials CTA) is in view
// — otherwise the bar sits directly under an identical button at those
// points, which reads as redundant rather than restrained.
export default function MobileBookingBar() {
  const [hidden, setHidden] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = document.querySelectorAll('[data-primary-cta]');
    if (targets.length === 0) return;

    // Tracks which CTAs are currently in view; IntersectionObserver only
    // reports entries whose status just changed, so this has to persist
    // across callbacks rather than being derived from one batch of entries.
    const intersecting = new Set<Element>();
    const barHeight = barRef.current?.offsetHeight ?? 80;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        });
        setHidden(intersecting.size > 0);
      },
      { rootMargin: `0px 0px -${barHeight}px 0px` },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Booking"
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sage-100 bg-cream/95 px-6 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-soft backdrop-blur transition-transform duration-300 ease-out lg:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <Link
        href="/book"
        tabIndex={hidden ? -1 : undefined}
        className="focus-ring flex h-12 w-full items-center justify-center rounded-full bg-terracotta font-sans text-base font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terracotta-600 active:bg-terracotta-700"
      >
        Book an Appointment
      </Link>
    </div>
  );
}
