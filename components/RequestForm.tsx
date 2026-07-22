'use client';

import { useId, useState, type FormEvent } from 'react';

interface RequestFormProps {
  submitLabel: string;
  confirmationHeading: string;
  confirmationMessage: string;
  showServiceField?: boolean;
  primaryCta?: boolean;
}

// No booking system or inbox exists behind this yet — submitting only
// confirms the request was captured client-side and shows an honest "we'll
// be in touch" state, rather than claiming an instant confirmed booking
// that doesn't exist. Wire this up to a real backend/email service before
// launch (see CLAUDE.md's content-honesty rule: don't imply infrastructure
// that isn't there).
export default function RequestForm({
  submitLabel,
  confirmationHeading,
  confirmationMessage,
  showServiceField,
  primaryCta,
}: RequestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-sage-100 bg-cream-50 p-10 text-center shadow-soft"
      >
        <p className="font-display text-2xl font-medium text-ink">{confirmationHeading}</p>
        <p className="mt-3 text-stone-600">{confirmationMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-sage-100 bg-cream-50 p-8 shadow-soft sm:p-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block" htmlFor={`${formId}-name`}>
          <span className="font-sans text-sm font-medium text-ink">Name</span>
          <input
            id={`${formId}-name`}
            required
            type="text"
            name="name"
            autoComplete="name"
            className="focus-ring mt-2 h-12 w-full rounded-xl border border-sage-200 bg-cream px-4 font-sans text-sm text-ink"
          />
        </label>

        <label className="block" htmlFor={`${formId}-email`}>
          <span className="font-sans text-sm font-medium text-ink">Email</span>
          <input
            id={`${formId}-email`}
            required
            type="email"
            name="email"
            autoComplete="email"
            className="focus-ring mt-2 h-12 w-full rounded-xl border border-sage-200 bg-cream px-4 font-sans text-sm text-ink"
          />
        </label>

        <label className="block" htmlFor={`${formId}-phone`}>
          <span className="font-sans text-sm font-medium text-ink">Phone (optional)</span>
          <input
            id={`${formId}-phone`}
            type="tel"
            name="phone"
            autoComplete="tel"
            className="focus-ring mt-2 h-12 w-full rounded-xl border border-sage-200 bg-cream px-4 font-sans text-sm text-ink"
          />
        </label>

        {showServiceField && (
          <label className="block" htmlFor={`${formId}-service`}>
            <span className="font-sans text-sm font-medium text-ink">What do you need?</span>
            <select
              id={`${formId}-service`}
              name="service"
              defaultValue="Not sure yet"
              className="focus-ring mt-2 h-12 w-full rounded-xl border border-sage-200 bg-cream px-4 font-sans text-sm text-ink"
            >
              <option>Eye examination</option>
              <option>Eyewear / frames</option>
              <option>Contact lenses</option>
              <option>An eye concern</option>
              <option>Not sure yet</option>
            </select>
          </label>
        )}
      </div>

      <label className="mt-6 block" htmlFor={`${formId}-message`}>
        <span className="font-sans text-sm font-medium text-ink">Message (optional)</span>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className="focus-ring mt-2 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 font-sans text-sm text-ink"
        />
      </label>

      <button
        type="submit"
        data-primary-cta={primaryCta ? '' : undefined}
        className="focus-ring mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-terracotta px-8 font-sans text-base font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terracotta-600 active:bg-terracotta-700 sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  );
}
