import Image from "next/image";
import { AddToCartButton } from "@/components/products/AddToCartButton";
import { FavoriteButton } from "@/components/products/FavoriteButton";
import { StarRating } from "@/components/common/StarRating";
import { formatRating, formatRupiah } from "@/lib/format";
import type { Product } from "@/types/home";

export function CatalogProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-card-line bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(87,51,29,0.09)]">
      <div className="relative h-[160px] overflow-hidden bg-blush sm:h-[190px] lg:h-[205px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 275px, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-sm bg-cream px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-brand">
            {product.badge}
          </span>
        ) : null}
        {discount ? (
          <span className="absolute bottom-3 left-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">
            -{discount}%
          </span>
        ) : null}
        <div className="absolute right-3 top-3">
          <FavoriteButton productName={product.name} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-center gap-1">
          <StarRating rating={product.rating} className="text-[12px] leading-4" />
          <span className="text-[10px] leading-4 text-muted">
            {formatRating(product.rating)} ({product.reviewCount})
          </span>
        </div>
        <h2 className="mt-2 font-display text-[17px] font-medium leading-6 text-ink sm:text-[19px]">
          {product.name}
        </h2>
        <p className="mt-1 min-h-10 text-[12px] leading-5 text-muted">
          {product.description}
        </p>
        <div className="mt-auto flex flex-wrap items-baseline gap-x-2 pt-3">
          <span className="text-[15px] font-semibold text-brand">
            {formatRupiah(product.price)}
          </span>
          {product.originalPrice ? (
            <span className="text-[11px] text-muted line-through">
              {formatRupiah(product.originalPrice)}
            </span>
          ) : null}
        </div>
        <AddToCartButton
          productId={product.id}
          productName={product.name}
          className="mt-3 h-10 w-full rounded-md text-[12px] sm:h-11 sm:text-[13px]"
        />
      </div>
    </article>
  );
}
