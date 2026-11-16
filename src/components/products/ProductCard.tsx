import Image from "next/image";
import { StarRating } from "@/components/common/StarRating";
import { AddToCartButton } from "@/components/products/AddToCartButton";
import { formatRating, formatRupiah } from "@/lib/format";
import type { Product } from "@/types/home";

type ProductCardProps = {
  product: Product;
};

/**
 * Compact two-column card on mobile; the larger inset-photo card with badge,
 * review count and "/ pcs" label from `lg` up.
 */
export function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, rating, reviewCount, image, badge } = product;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-card-line bg-white lg:min-h-[438px] lg:p-[11px]">
      <div className="relative h-[145px] overflow-hidden bg-blush lg:h-[246px] lg:rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 392px, 50vw"
          className="object-cover"
        />
        {badge && (
          <span className="absolute left-[14px] top-[15px] hidden h-[27px] w-[90px] items-center justify-center rounded-sm bg-cream text-[9px] font-semibold uppercase text-brand lg:flex">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-[13px] lg:px-3 lg:pb-[14px] lg:pt-[18px]">
        <div className="flex items-center justify-between lg:justify-start lg:gap-1">
          <StarRating
            rating={rating}
            className="text-[13px] leading-[17px] lg:text-[14px] lg:leading-[21px]"
          />
          <p className="text-[12px] leading-[18px] text-muted lg:text-[11px] lg:leading-[16.5px]">
            {formatRating(rating)}
            <span className="hidden lg:inline">
              &nbsp;&nbsp;({reviewCount} ulasan)
            </span>
          </p>
        </div>

        <h3 className="mt-2 min-h-[46px] font-display text-[16px] font-medium leading-[23px] text-ink lg:min-h-0 lg:text-[23px] lg:leading-[1.5]">
          {name}
        </h3>

        <div className="mt-2 lg:mt-[10px] lg:flex lg:items-start lg:justify-between">
          <div>
            <p className="text-[16px] font-semibold leading-6 text-brand lg:text-[19px] lg:leading-[28.5px]">
              {formatRupiah(price)}
            </p>
            <p className="hidden text-[11px] leading-[16.5px] text-muted lg:block">
              / pcs
            </p>
          </div>
          <AddToCartButton
            productId={id}
            productName={name}
            className="mt-[13px] h-11 w-full rounded-md text-[13px] lg:mt-[15px] lg:h-[47px] lg:w-[190px]"
          />
        </div>
      </div>
    </article>
  );
}
