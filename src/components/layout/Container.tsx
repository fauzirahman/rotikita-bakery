import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Page-width wrapper: 20px gutters on mobile, 72px on a 1440px canvas. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-[72px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
