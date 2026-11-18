import Link from "next/link";

export function AccountButton() {
  return (
    <Link
      href="/login"
      aria-label="Masuk ke akun"
      className="flex size-11 shrink-0 items-center justify-center rounded-md text-ink transition-colors hover:bg-blush"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="size-[22px]"
      >
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M5 20c.7-3.1 3.2-5 7-5s6.3 1.9 7 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
