'use client';

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import Link from 'next/link';
import { SAMPLE_TESTIMONIALS, selectTestimonials, type Testimonial } from '@/lib/testimonials';

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD_PX = 40;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const handleChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return reduced;
}

function TestimonialCard({
  testimonial,
  featured,
  showBranch,
}: {
  testimonial: Testimonial;
  featured?: boolean;
  showBranch: boolean;
}) {
  return (
    <figure
      className={`flex h-full flex-col justify-between rounded-3xl border border-dashed border-sage-200 bg-cream-50 ${
        featured ? 'p-10' : 'p-8'
      }`}
    >
      <div>
        <span className="inline-block font-sans text-xs font-medium uppercase tracking-[0.14em] text-stone-400">
          Sample review
        </span>
        <blockquote
          className={`mt-4 font-display italic text-ink ${
            featured ? 'text-2xl leading-snug' : 'text-lg leading-snug'
          }`}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-6 text-sm text-stone-600">
        <span className="font-medium text-ink">{testimonial.name}</span>
        {' · '}
        {testimonial.service}
        {showBranch ? ` · ${testimonial.branch}` : ''}
      </figcaption>
    </figure>
  );
}

function TestimonialCarousel({
  testimonials,
  showBranch,
}: {
  testimonials: Testimonial[];
  showBranch: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const drag = useRef({ startX: 0, deltaX: 0, dragging: false });
  const count = testimonials.length;

  const goTo = (next: number) => setIndex(((next % count) + count) % count);
  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  useEffect(() => {
    if (paused || reducedMotion || count <= 1) return;
    const id = setInterval(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reducedMotion, count, index]);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    drag.current = { startX: event.clientX, deltaX: 0, dragging: true };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current.dragging) return;
    drag.current.deltaX = event.clientX - drag.current.startX;
  }

  function handlePointerUp() {
    const { deltaX, dragging } = drag.current;
    drag.current.dragging = false;
    if (!dragging) return;
    if (deltaX > SWIPE_THRESHOLD_PX) goPrev();
    else if (deltaX < -SWIPE_THRESHOLD_PX) goNext();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onKeyDown={handleKeyDown}
    >
      <div
        className="touch-pan-y overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className={`flex ${reducedMotion ? '' : 'transition-transform duration-500 ease-out'}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${count}`}
              aria-hidden={i !== index}
              className="w-full flex-none px-0.5"
            >
              <TestimonialCard testimonial={testimonial} featured showBranch={showBranch} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-sage-200 text-ink transition-colors hover:border-terracotta hover:text-terracotta"
        >
          <span aria-hidden="true">&larr;</span>
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? 'bg-terracotta' : 'bg-sage-200'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-sage-200 text-ink transition-colors hover:border-terracotta hover:text-terracotta"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default function Testimonials({ branchId }: { branchId?: string } = {}) {
  const testimonials = selectTestimonials(SAMPLE_TESTIMONIALS, branchId).slice(0, 3);

  if (testimonials.length === 0) return null;

  const [featured, ...supporting] = testimonials;
  const showBranch = new Set(testimonials.map((t) => t.branch)).size > 1;

  return (
    <section aria-labelledby="testimonials-heading" className="border-t border-sage-100 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">
            In patients&rsquo; own words
          </p>
          <h2 id="testimonials-heading" className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            What visiting actually feels like
          </h2>
          <p className="mt-5 text-stone-600">
            Sample reviews below — replace with real, consented customer
            testimonials before launch.
          </p>
        </div>

        {/* Desktop: one featured card + two supporting cards */}
        <div className="mt-16 hidden gap-8 lg:grid lg:grid-cols-2">
          <TestimonialCard testimonial={featured} featured showBranch={showBranch} />
          <div className="flex flex-col gap-8">
            {supporting.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} showBranch={showBranch} />
            ))}
          </div>
        </div>

        {/* Mobile and tablet: swipeable carousel */}
        <div className="mt-16 lg:hidden">
          <TestimonialCarousel testimonials={testimonials} showBranch={showBranch} />
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/book"
            className="focus-ring inline-flex h-14 items-center justify-center rounded-full bg-terracotta px-8 font-sans text-base font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terracotta-600 active:bg-terracotta-700"
          >
            Experience It for Yourself
          </Link>
        </div>
      </div>
    </section>
  );
}
