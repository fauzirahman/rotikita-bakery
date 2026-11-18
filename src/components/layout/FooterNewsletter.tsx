"use client";

import { useState, type FormEvent } from "react";

export function FooterNewsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mt-10 border-t border-footer-line pt-8 lg:mt-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
      <div>
        <p className="font-display text-[22px] text-cream">
          Kabar manis dari RotiKita
        </p>
        <p className="mt-1 text-[12px] leading-5 text-footer-text">
          Dapatkan cerita dan promo terbaru langsung di email Anda.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-2 sm:flex-row lg:mt-0 lg:w-[480px]"
      >
        <label className="sr-only" htmlFor="footer-newsletter-email">
          Alamat email untuk newsletter
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Alamat email Anda"
          className="h-11 min-w-0 flex-1 rounded-md border border-footer-line bg-white px-3 text-[13px] text-ink outline-none placeholder:text-muted focus:border-sand focus:ring-2 focus:ring-sand/40"
        />
        <button
          type="submit"
          className="h-11 rounded-md bg-brand px-5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          Berlangganan
        </button>
      </form>
      {submitted ? (
        <p role="status" className="mt-3 text-[11px] text-footer-muted lg:mt-0">
          Formulir demo: alamat email belum disimpan.
        </p>
      ) : null}
    </div>
  );
}
