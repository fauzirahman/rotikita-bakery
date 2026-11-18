"use client";

import { useState, type FormEvent } from "react";

const subjects = [
  "Informasi Produk",
  "Pemesanan",
  "Kerja Sama",
  "Keluhan dan Saran",
  "Lainnya",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-card-line bg-white p-5 sm:p-7"
    >
      <h2 className="font-display text-[28px] text-ink">Kirim pesan</h2>
      <p className="mt-1 text-[12px] leading-5 text-muted">
        Isi detail berikut agar tim kami tahu cara membantu.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-[11px] font-semibold text-ink">
          Nama lengkap
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 h-11 w-full rounded-md border border-input-line bg-cream px-3 text-[13px] font-normal outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </label>
        <label className="text-[11px] font-semibold text-ink">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 h-11 w-full rounded-md border border-input-line bg-cream px-3 text-[13px] font-normal outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </label>
        <label className="text-[11px] font-semibold text-ink">
          Nomor WhatsApp
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="mt-2 h-11 w-full rounded-md border border-input-line bg-cream px-3 text-[13px] font-normal outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </label>
        <label className="text-[11px] font-semibold text-ink">
          Kategori pertanyaan
          <select
            name="category"
            required
            defaultValue=""
            className="mt-2 h-11 w-full rounded-md border border-input-line bg-cream px-3 text-[13px] font-normal outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
          >
            <option value="" disabled>
              Pilih kategori
            </option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>
        <label className="text-[11px] font-semibold text-ink sm:col-span-2">
          Subjek
          <input
            name="subject"
            type="text"
            required
            className="mt-2 h-11 w-full rounded-md border border-input-line bg-cream px-3 text-[13px] font-normal outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </label>
        <label className="text-[11px] font-semibold text-ink sm:col-span-2">
          Pesan
          <textarea
            name="message"
            rows={5}
            required
            className="mt-2 w-full resize-y rounded-md border border-input-line bg-cream px-3 py-2.5 text-[13px] font-normal leading-5 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand px-5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-auto sm:min-w-[180px]"
      >
        Kirim pesan
      </button>
      {submitted ? (
        <p
          role="status"
          className="mt-4 rounded-md bg-blush px-4 py-3 text-[12px] leading-5 text-ink"
        >
          Formulir ini masih demo, jadi pesan belum terkirim. Silakan hubungi
          kontak contoh di samping untuk melanjutkan.
        </p>
      ) : null}
    </form>
  );
}
