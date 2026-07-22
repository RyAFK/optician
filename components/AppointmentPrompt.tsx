import Link from 'next/link';

interface AppointmentPromptProps {
  message: string;
  secondaryLabel: string;
  secondaryHref: string;
}

// A quiet, single-line CTA moment for between major sections — deliberately
// not a full boxed/colored block, so it reads as a rhythm beat rather than
// another competing section. Reused wherever the appointment journey needs
// a checkpoint without repeating a heavy CTA treatment.
export default function AppointmentPrompt({ message, secondaryLabel, secondaryHref }: AppointmentPromptProps) {
  return (
    <div className="border-t border-sage-100 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <p className="font-display text-xl italic text-ink">{message}</p>

        <div className="flex flex-none items-center gap-6">
          <Link
            href="/book"
            data-primary-cta
            className="focus-ring inline-flex h-12 items-center justify-center rounded-full bg-terracotta px-7 font-sans text-sm font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terracotta-600 active:bg-terracotta-700"
          >
            Book an Appointment
          </Link>

          <Link
            href={secondaryHref}
            className="focus-ring group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-ink-700 transition-colors hover:text-terracotta"
          >
            {secondaryLabel}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
