import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/layout/Container";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProductsExplorer } from "@/components/products/ProductsExplorer";
import { catalogProducts, productCategories } from "@/lib/catalog-data";

type ProductsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

async function ProductResults({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const requestedCategory = Array.isArray(category) ? category[0] : category;
  const initialCategory = productCategories.some(
    (item) => item.id === requestedCategory,
  )
    ? requestedCategory
    : "all";

  return (
    <ProductsExplorer
      products={catalogProducts}
      initialCategory={initialCategory}
    />
  );
}

export default function ProductsPage(props: ProductsPageProps) {
  return (
    <PageLayout activeHref="/products">
      <PageHero
        breadcrumb="Semua Roti"
        title="Temukan Roti Favoritmu"
        description="Pilihan roti fresh setiap hari, dibuat dengan bahan berkualitas dan penuh cinta."
        image="/images/hero/artisan-bread.png"
        imageAlt="Aneka roti artisan segar dalam keranjang anyaman"
      />
      <Suspense
        fallback={<ProductsExplorer products={catalogProducts} />}
      >
        <ProductResults searchParams={props.searchParams} />
      </Suspense>
      <section className="bg-cream pb-10">
        <Container>
          <div className="overflow-hidden rounded-[14px] bg-brand sm:grid sm:grid-cols-[1fr_0.85fr]">
            <div className="px-6 py-7 sm:px-9 sm:py-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-peach">
                Lebih hemat, lebih hangat
              </p>
              <h2 className="mt-3 font-display text-[28px] leading-tight text-white sm:text-[34px]">
                Bagikan roti favorit bersama keluarga.
              </h2>
              <p className="mt-3 max-w-[430px] text-[13px] leading-6 text-cream">
                Jelajahi pilihan roti untuk sarapan, teman minum teh, dan momen
                spesial di rumah.
              </p>
              <Button
                href="/promo"
                variant="cream"
                className="mt-5 h-11 rounded-md px-5 text-[12px]"
              >
                Lihat promo
              </Button>
            </div>
            <div className="relative min-h-[190px] sm:min-h-[270px]">
              <Image
                src="/images/promo/weekend-croissant-coffee.png"
                alt="Croissant dan kopi untuk dinikmati bersama"
                fill
                sizes="(min-width: 640px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-10 rounded-xl border border-card-line bg-white px-5 py-7 text-center sm:px-8">
            <h2 className="font-display text-[26px] text-ink">
              Dapatkan kabar manis dari kami
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-muted">
              Promo dan cerita terbaru dari dapur RotiKita.
            </p>
            <Link
              href="/#newsletter-heading"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-5 text-[12px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Berlangganan newsletter
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
