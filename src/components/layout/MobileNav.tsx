"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { CartButton } from "@/components/layout/CartButton";
import { AccountButton } from "@/components/layout/AccountButton";
import { Logo } from "@/components/layout/Logo";
import { SearchButton } from "@/components/layout/SearchButton";
import { siteInfo } from "@/lib/home-data";
import type { NavLink } from "@/types/home";

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M3 6h16M3 11h16M3 16h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M5 5l12 12M17 5L5 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Hamburger button plus the full-screen mobile menu. Hidden from `lg` up. */
export function MobileNav({
  links,
  activeHref,
}: {
  links: NavLink[];
  activeHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Buka menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-ml-2 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-md text-ink transition-colors hover:bg-blush xl:hidden"
      >
        <MenuIcon />
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="fixed inset-0 z-50 overflow-y-auto bg-cream xl:hidden"
        >
          <div className="flex h-[72px] items-center gap-3 px-5">
            <button
              type="button"
              onClick={close}
              aria-label="Tutup menu"
              className="-ml-2 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-md text-ink transition-colors hover:bg-blush"
            >
              <CloseIcon />
            </button>
            <Logo />
            <div className="-mr-1 ml-auto flex items-center gap-3">
              <SearchButton />
              <AccountButton />
              <CartButton />
            </div>
          </div>
          <div className="mx-5 h-px bg-line" />

          <p className="mt-9 px-6 text-[11px] font-semibold uppercase leading-[16.5px] text-brand">
            Selamat datang di RotiKita
          </p>

          <nav aria-label="Menu utama" className="mt-9 px-5">
            <ul>
              {links.map((link) => (
                <li key={link.label} className="border-b border-line">
                  <Link
                    href={link.href}
                    onClick={close}
                    aria-current={link.href === activeHref ? "page" : undefined}
                    className={`flex h-[59px] items-center justify-between px-1 font-display text-[28px] leading-[38px] transition-colors hover:text-brand ${
                      link.href === activeHref ? "text-brand" : "text-ink"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true" className="text-[24px] text-brand">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-5 pb-8">
            <Button
              href="/login"
              onClick={close}
              className="mt-[47px] h-[52px] w-full rounded-md text-[14px]"
            >
              Login
            </Button>
            <p className="mt-[31px] text-[15px] leading-[23px] text-muted">
              Roti fresh untuk setiap momen Anda.
            </p>
            <Button
              href={siteInfo.whatsappUrl}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[21px] h-[52px] w-full rounded-md text-[14px]"
            >
              Hubungi via WhatsApp ↗
            </Button>
            <p className="mt-[23px] text-[12px] leading-[18px] text-muted">
              {siteInfo.hoursShort}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
