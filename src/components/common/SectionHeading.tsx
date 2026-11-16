import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  /** Id of the `<h2>`, used for `aria-labelledby` on the section. */
  titleId?: string;
  align?: "center" | "left";
  /** Uses the larger 40px desktop title (best-sellers section). */
  large?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  align = "center",
  large = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <p className="text-[11px] font-semibold uppercase leading-normal text-brand">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={cn(
          "mt-[9px] font-display text-[30px] font-normal leading-[1.2] text-ink md:leading-[1.5]",
          large ? "md:text-[40px]" : "md:text-[38px]",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
