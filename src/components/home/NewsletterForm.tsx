"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/common/Button";

/**
 * Newsletter signup. There is no backend yet: submitting only shows the
 * confirmation dialog (the design labels it a subscription simulation).
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!confirmed) return;

    backButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setConfirmed(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [confirmed]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setConfirmed(true);
  }

  function handleClose() {
    setConfirmed(false);
    setEmail("");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-[22px] flex max-w-[640px] flex-col gap-3 lg:h-[58px] lg:flex-row lg:items-center lg:gap-0 lg:rounded-[7px] lg:border lg:border-input-line lg:bg-white lg:pr-[5px]"
      >
        <label className="flex h-14 items-center gap-[14px] rounded-[7px] border border-input-line bg-white px-4 lg:h-full lg:flex-1 lg:rounded-none lg:border-0 lg:bg-transparent lg:pl-[17px] lg:pr-0">
          <Image
            src="/icons/mail.svg"
            alt=""
            width={22}
            height={22}
            className="hidden lg:block"
          />
          <span className="sr-only">Alamat email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Masukkan alamat email Anda"
            className="min-w-0 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-muted lg:text-[13px]"
          />
        </label>
        <Button
          type="submit"
          className="h-[52px] w-full rounded-md text-[13px] lg:h-12 lg:w-[182px] lg:rounded-[5px]"
        >
          Berlangganan&nbsp;
          <span aria-hidden="true">→</span>
        </Button>
      </form>

      {confirmed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-5"
          onClick={handleClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-dialog-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-[350px] rounded-[14px] bg-cream p-6 text-center shadow-[0_8px_24px_rgba(51,31,15,0.09)]"
          >
            <h3
              id="newsletter-dialog-title"
              className="font-display text-[30px] font-normal leading-[1.5] text-ink"
            >
              Terima kasih!
            </h3>
            <p className="mt-2 text-[14px] leading-[23px] text-muted">
              Promo manis siap menemani hari Anda. Ini adalah simulasi
              berlangganan.
            </p>
            <Button
              ref={backButtonRef}
              type="button"
              onClick={handleClose}
              className="mt-6 h-[52px] w-full rounded-md text-[14px]"
            >
              Kembali
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
