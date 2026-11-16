import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "cream";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline:
    "border border-brand text-brand hover:bg-brand hover:text-white",
  cream: "bg-cream text-brand hover:bg-white",
};

/**
 * Brand button. Renders a `next/link` when `href` is given, otherwise a
 * native `<button>`. Size and radius come from the caller's `className`.
 */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", className, children, ...rest } = props;
    return (
      <Link className={cn(base, variants[variant], className)} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant = "primary", className, children, ...rest } = props;
  return (
    <button
      type="button"
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
