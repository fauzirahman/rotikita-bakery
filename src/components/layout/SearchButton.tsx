import Image from "next/image";
import Link from "next/link";

export function SearchButton() {
  return (
    <Link
      href="/products"
      aria-label="Cari roti"
      className="flex size-11 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-blush"
    >
      <Image
        src="/icons/search.svg"
        alt=""
        width={24}
        height={24}
        className="size-[22px] lg:size-6"
      />
    </Link>
  );
}
