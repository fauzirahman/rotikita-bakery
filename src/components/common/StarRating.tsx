import { cn } from "@/lib/cn";
import { formatRating } from "@/lib/format";

type StarRatingProps = {
  rating?: number;
  className?: string;
};

/** Five brand-colored stars, matching the design. */
export function StarRating({ rating = 5, className }: StarRatingProps) {
  return (
    <span
      role="img"
      aria-label={`Rating ${formatRating(rating)} dari 5`}
      className={cn("block whitespace-nowrap text-brand", className)}
    >
      ★★★★★
    </span>
  );
}
