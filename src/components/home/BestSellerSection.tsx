import Link from "next/link";
import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { bestSellers } from "@/lib/home-data";

export function BestSellerSection() {
  return (
    <section
      aria-labelledby="bestseller-heading"
      className="bg-white pb-[18px] pt-8 lg:pb-[79px] lg:pt-[55px]"
    >
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <SectionHeading
              align="left"
              large
              eyebrow="Favorit pelanggan"
              titleId="bestseller-heading"
              title={
                <>
                  Selalu jadi <br className="md:hidden" />
                  pilihan pertama.
                </>
              }
            />
            <p className="mt-2 text-[15px] leading-[23px] text-muted lg:mt-[6px] lg:leading-normal">
              Roti paling dicintai, siap <br className="md:hidden" />
              menemani hari Anda.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-[13px] font-semibold leading-normal text-brand transition-colors hover:text-brand-dark lg:block lg:pb-[2px]"
          >
            Lihat Semua Roti&nbsp;&nbsp;↗
          </Link>
        </div>

        <ul className="mt-[25px] grid grid-cols-2 gap-3 lg:mt-[38px] lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7">
          {bestSellers.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <Button
          href="/products"
          variant="outline"
          className="mt-4 h-12 w-full rounded-md text-[14px] lg:hidden"
        >
          Lihat Semua Roti
        </Button>
      </Container>
    </section>
  );
}
