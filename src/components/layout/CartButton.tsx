"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";

export function CartButton() {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={count > 0 ? `Keranjang, ${count} item` : "Keranjang"}
      className="relative flex size-11 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-blush"
    >
      <Image
        src="/icons/shopping-bag.svg"
        alt=""
        width={24}
        height={24}
        className="size-[22px] lg:size-6"
      />
      {count > 0 && (
        <span className="absolute right-0 top-0 flex size-[18px] items-center justify-center rounded-full bg-brand text-[11px] font-semibold leading-none text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
