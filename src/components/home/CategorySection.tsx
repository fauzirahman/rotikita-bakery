import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { categories } from "@/lib/home-data";

export function CategorySection() {
  return (
    <section
      id="kategori"
      aria-labelledby="kategori-heading"
      className="scroll-mt-24 bg-cream"
    >
      <Container className="pb-[33px] pt-[23px] lg:pb-[59px] lg:pt-[37px]">
        <SectionHeading
          eyebrow="Temukan favorit Anda"
          titleId="kategori-heading"
          title={
            <>
              Ada roti untuk <br className="md:hidden" />
              setiap selera.
            </>
          }
        />

        <ul className="mt-8 grid grid-cols-3 gap-x-[10px] gap-y-[19px] lg:mt-9 lg:grid-cols-6 lg:gap-x-0">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/products?category=${category.id}`}
                className="group flex flex-col items-center"
              >
                <span className="relative block size-[88px] overflow-hidden rounded-full bg-blush shadow-[0_12px_22px_rgba(83,55,38,0.08)] transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_18px_28px_rgba(83,55,38,0.12)] lg:size-[162px]">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 162px, 88px"
                    className="rounded-full object-cover"
                  />
                </span>
                <span className="mt-[11px] text-center text-[13px] font-semibold leading-5 text-ink transition-colors group-hover:text-brand lg:mt-[19px] lg:text-[16px] lg:leading-normal">
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
