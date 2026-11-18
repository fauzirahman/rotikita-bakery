import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { PageLayout } from "@/components/layout/PageLayout";
import { CatalogProductCard } from "@/components/products/CatalogProductCard";
import { catalogProducts, discoveryCategories } from "@/lib/catalog-data";

export default function CategoriesPage() {
  const featuredProducts = [
    catalogProducts[0],
    catalogProducts[1],
    catalogProducts[8],
    catalogProducts[5],
  ];

  return (
    <PageLayout activeHref="/categories">
      <PageHero
        breadcrumb="Kategori"
        title="Jelajahi Kategori Roti"
        description="Temukan berbagai pilihan roti sesuai selera dan momen favoritmu."
        image="/images/categories/croissant.png"
        imageAlt="Croissant keemasan yang baru dipanggang"
      />

      <section aria-labelledby="category-grid-heading" className="bg-white">
        <Container className="py-10 sm:py-14">
          <SectionHeading
            align="left"
            eyebrow="Pilih sesuai selera"
            titleId="category-grid-heading"
            title="Apa yang ingin kamu nikmati?"
          />
          <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {discoveryCategories.map((category) => (
              <li key={category.id}>
                <article className="group h-full overflow-hidden rounded-xl border border-card-line bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(87,51,29,0.09)]">
                  <Link
                    href={`/products?category=${category.id}`}
                    className="flex h-full flex-col"
                  >
                    <div className="relative h-[205px] overflow-hidden bg-blush sm:h-[230px]">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1.5 text-[10px] font-semibold text-brand">
                        {category.productCount} pilihan
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-display text-[23px] text-ink">
                        {category.name}
                      </h2>
                      <p className="mt-2 min-h-10 text-[12px] leading-5 text-muted">
                        {category.description}
                      </p>
                      <span className="mt-4 inline-flex min-h-10 items-center text-[12px] font-semibold text-brand">
                        Jelajahi kategori <span className="ml-2">↗</span>
                      </span>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="category-featured-heading" className="bg-cream">
        <Container className="py-10 sm:py-14">
          <SectionHeading
            eyebrow="Pilihan untukmu"
            titleId="category-featured-heading"
            title="Favorit minggu ini."
          />
          <p className="mx-auto mt-2 max-w-xl text-center text-[13px] leading-6 text-muted">
            Dari roti terlaris hingga teman minum teh pilihan pelanggan.
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <li key={product.id}>
                <CatalogProductCard product={product} />
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand px-6 text-[12px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Lihat semua roti
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
