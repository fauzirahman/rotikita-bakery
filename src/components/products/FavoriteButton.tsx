"use client";

import { useState } from "react";

export function FavoriteButton({ productName }: { productName: string }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-label={
        favorite
          ? `Hapus ${productName} dari favorit`
          : `Simpan ${productName} ke favorit`
      }
      aria-pressed={favorite}
      onClick={() => setFavorite((current) => !current)}
      className="flex size-10 items-center justify-center rounded-full border border-card-line bg-white/95 text-brand shadow-sm transition-colors hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5"
        fill={favorite ? "currentColor" : "none"}
      >
        <path
          d="M20.8 8.8c0 4.1-8.8 10-8.8 10s-8.8-5.9-8.8-10A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
