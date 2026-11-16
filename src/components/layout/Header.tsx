import Link from "next/link";
import { Button } from "@/components/common/Button";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
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
        <div className="flex h-[72px] items-center gap-3 lg:h-[103px] lg:gap-0">
          <MobileNav links={navLinks} />
          <Logo className="shrink-0 xl:w-[313px]" />

          <nav
            aria-label="Navigasi utama"
            className="hidden flex-1 items-center gap-10 pl-10 lg:flex xl:pl-0"
          >
            {navLinks.map((link) => {
              const active = link.href === activeHref;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-[13px] leading-5 transition-colors hover:text-brand",
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

          <div className="-mr-1 ml-auto flex items-center gap-3 lg:mr-0 lg:gap-2">
            <SearchButton />
            <CartButton />
            <Button
              href="/login"
              className="ml-3 hidden h-11 w-[124px] rounded-md text-[13px] lg:inline-flex"
            >
              Login
            </Button>
          </div>
        </div>
        <div className="h-px bg-line" />
      </Container>
    </header>
  );
}
