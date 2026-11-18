import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

type PageHeroProps = {
  breadcrumb: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  breadcrumb,
  title,
  description,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-cream">
      <Container className="pb-10 pt-7 sm:pb-14 lg:pb-[74px] lg:pt-9">
        <nav aria-label="Breadcrumb" className="text-[12px] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-brand">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-brand">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <div className="mt-7 grid items-center gap-8 lg:mt-8 lg:grid-cols-[1fr_0.88fr] lg:gap-14">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Dibuat fresh, dibagikan dengan cinta
            </p>
            <h1 className="mt-3 max-w-[740px] font-display text-[38px] font-normal leading-[1.13] text-ink sm:text-[48px] lg:text-[54px]">
              {title}
            </h1>
            <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-muted sm:text-[16px]">
              {description}
            </p>
          </div>
          {image ? (
            <div className="relative h-[230px] overflow-hidden rounded-bl-[12px] rounded-br-[72px] rounded-tl-[72px] rounded-tr-[12px] bg-blush shadow-[0_22px_44px_rgba(92,54,25,0.08)] sm:h-[310px] lg:h-[330px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
