import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** `brand` for the header, `light` for the dark footer. */
  tone?: "brand" | "light";
  className?: string;
};

export function Logo({ tone = "brand", className }: LogoProps) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      aria-label="RotiKita Bakery, ke beranda"
      className={cn("inline-block", className)}
    >
      <span
        className={cn(
          "block font-display font-medium",
          light
            ? "text-[36px] leading-[1.6] text-cream"
            : "text-[28px] leading-[1.15] text-brand lg:text-[32px] lg:leading-[35.2px]",
        )}
      >
        RotiKita
      </span>
      <span
        className={cn(
          "block text-[9px] uppercase tracking-[0.3em]",
          light
            ? "leading-[1.6] text-sand"
            : "mt-1 leading-[13.5px] text-muted",
        )}
      >
        Artisan Bakery
      </span>
    </Link>
  );
}
