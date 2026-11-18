import Link from "next/link";
import { Button } from "@/components/common/Button";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { AccountButton } from "@/components/layout/AccountButton";
import { CartButton } from "@/components/layout/CartButton";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { SearchButton } from "@/components/layout/SearchButton";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/home-data";

type HeaderProps = {
  /** `href` of the nav item to mark as the current page. */
  activeHref?: string;
};

export function Header({ activeHref = "/" }: HeaderProps) {
  return (
    <header className="bg-cream">
      <AnnouncementBar />
      <Container>
        <div className="flex h-[72px] items-center gap-3 xl:h-[103px] xl:gap-0">
          <MobileNav links={navLinks} activeHref={activeHref} />
          <Logo className="shrink-0 xl:w-[260px] 2xl:w-[313px]" />

          <nav
            aria-label="Navigasi utama"
            className="hidden flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-8"
          >
            {navLinks.map((link) => {
              const active = link.href === activeHref;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap text-[12px] leading-5 transition-colors hover:text-brand 2xl:text-[13px]",
                    active
                      ? "font-semibold text-brand after:absolute after:left-0 after:top-7 after:h-0.5 after:w-full after:bg-brand"
                      : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="-mr-1 ml-auto flex items-center gap-1 xl:mr-0 xl:gap-1">
            <SearchButton />
            <span className="xl:hidden">
              <AccountButton />
            </span>
            <CartButton />
            <span className="hidden xl:block">
              <Button
                href="/login"
                className="ml-2 h-11 w-[100px] rounded-md text-[13px] 2xl:ml-3 2xl:w-[124px]"
              >
                Login
              </Button>
            </span>
          </div>
        </div>
        <div className="h-px bg-line" />
      </Container>
    </header>
  );
}
