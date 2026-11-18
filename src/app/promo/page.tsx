import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/layout/Container";
import { PageLayout } from "@/components/layout/PageLayout";
import { PromoCountdown } from "@/components/home/PromoCountdown";
import { promotions } from "@/lib/catalog-data";

export default function PromoPage() {
  return (
    <PageLayout activeHref="/promo">
      <PageHero
        breadcrumb="Promo"
        title="Promo Spesial RotiKita"
        description="Nikmati penawaran terbaik untuk setiap momen spesialmu."
        image="/images/promo/weekend-croissant-coffee.png"
        imageAlt="Croissant dan kopi hangat di meja bakery"
      />

      <section aria-labelledby="promo-list-heading" className="bg-white">
        <Container className="py-10 sm:py-14">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                Penawaran pilihan
              </p>
              <h2
                id="promo-list-heading"
                className="mt-2 font-display text-[30px] text-ink sm:text-[38px]"
              >
                Temukan promo favoritmu.
              </h2>
            </div>
            <span className="w-fit rounded-full bg-blush px-3 py-2 text-[10px] font-semibold text-brand">
              Konten promo contoh
            </span>
          </div>

          <div className="mb-6 rounded-xl bg-cream p-5 sm:flex sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
                Promo hari ini
              </p>
              <h3 className="mt-1 font-display text-[22px] text-ink">
                Penawaran demo berakhir dalam
              </h3>
            </div>
            <PromoCountdown />
          </div>

          <ul className="grid gap-5 md:grid-cols-2">
            {promotions.map((promo, index) => (
              <li key={promo.id}>
                <article className="grid h-full overflow-hidden rounded-xl border border-card-line bg-white sm:grid-cols-[0.88fr_1fr]">
                  <div className="relative min-h-[205px] bg-blush sm:min-h-[260px]">
                    <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-brand px-3 py-1.5 text-[10px] font-semibold text-white">
                      {promo.offer}
                    </span>
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand">
                      {index === 0
                        ? "Promo hari ini"
                        : index === 1
                          ? "Diskon akhir pekan"
                          : index === 2
                            ? "Paket hemat"
                            : "Momen berbagi"}
                    </p>
                    <h3 className="mt-2 font-display text-[24px] leading-tight text-ink">
                      {promo.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-muted">
                      {promo.description}
                    </p>
                    <div className="mt-4 rounded-md border border-dashed border-input-line bg-cream px-3 py-2.5">
                      <p className="text-[9px] uppercase tracking-wide text-muted">
                        Kode contoh
                      </p>
                      <p className="mt-0.5 font-semibold tracking-[0.12em] text-brand">
                        {promo.code}
                      </p>
                    </div>
                    <p className="mt-3 text-[10px] text-muted">
                      {promo.validity}
                    </p>
                    <Link
                      href={`/products?category=${promo.categoryId}`}
                      className="mt-auto inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-4 text-[12px] font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:mt-4"
                    >
                      Lihat Produk
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="syarat" aria-labelledby="terms-heading" className="bg-cream">
        <Container className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl rounded-xl border border-card-line bg-white p-5 sm:p-8">
            <h2
              id="terms-heading"
              className="font-display text-[27px] text-ink"
            >
              Syarat & ketentuan
            </h2>
            <ul className="mt-4 space-y-3 text-[12px] leading-5 text-muted">
              <li>
                Informasi promo, periode, dan kode pada halaman ini adalah
                konten contoh untuk tampilan demo, bukan penawaran yang
                terverifikasi.
              </li>
              <li>
                Kode promo belum dapat digunakan pada proses pemesanan karena
                situs ini belum terhubung ke sistem transaksi.
              </li>
              <li>
                Harga dan ketersediaan produk juga merupakan data contoh.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
