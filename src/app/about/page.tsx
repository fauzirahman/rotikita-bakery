import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/layout/Container";
import { PageLayout } from "@/components/layout/PageLayout";
import { testimonials } from "@/lib/home-data";

const values = [
  {
    title: "Fresh Every Day",
    description: "Roti dibuat dan dipanggang setiap hari dalam jumlah terjaga.",
    icon: "01",
  },
  {
    title: "Quality Ingredients",
    description: "Kami memilih bahan dengan saksama untuk rasa yang konsisten.",
    icon: "02",
  },
  {
    title: "Made with Love",
    description: "Setiap adonan dirawat dengan teliti, dari dapur sampai meja.",
    icon: "03",
  },
  {
    title: "Customer Satisfaction",
    description: "Kenyamanan dan pengalaman pelanggan selalu jadi perhatian.",
    icon: "04",
  },
];

const bakingSteps = [
  "Memilih bahan berkualitas",
  "Menyiapkan adonan segar",
  "Memanggang dengan perhatian",
  "Mengirim roti selagi fresh",
];

export default function AboutPage() {
  return (
    <PageLayout activeHref="/about">
      <PageHero
        breadcrumb="Tentang Kami"
        title="Cerita di Balik Setiap Gigitan"
        description="Menghadirkan kehangatan dan kebahagiaan melalui roti fresh setiap hari."
        image="/images/hero/artisan-bread.png"
        imageAlt="Roti artisan yang baru selesai dipanggang"
      />

      <section aria-labelledby="story-heading" className="bg-white">
        <Container className="grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-14">
          <div className="relative min-h-[270px] overflow-hidden rounded-xl bg-blush sm:min-h-[380px]">
            <Image
              src="/images/promo/weekend-croissant-coffee.png"
              alt="Sajian croissant dan kopi dalam suasana bakery yang hangat"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Cerita kami
            </p>
            <h2
              id="story-heading"
              className="mt-2 font-display text-[32px] leading-tight text-ink sm:text-[40px]"
            >
              Berawal dari dapur, tumbuh bersama keluarga.
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-muted">
              RotiKita berangkat dari kecintaan sederhana pada aroma roti
              hangat dan keinginan untuk membagikannya kepada lebih banyak
              orang. Kami percaya, roti yang dibuat dengan perhatian dapat
              membuat momen sehari-hari terasa lebih istimewa.
            </p>
            <p className="mt-3 text-[14px] leading-7 text-muted">
              Karena itu, setiap hari kami menyiapkan pilihan roti dengan bahan
              berkualitas, resep yang akrab di lidah, dan harga yang tetap
              bersahabat. Cerita ini adalah pengenalan brand untuk demo situs.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="mission-heading" className="bg-cream">
        <Container className="py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-xl bg-brand p-6 text-white sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-peach">
                Misi kami
              </p>
              <h2
                id="mission-heading"
                className="mt-3 font-display text-[27px] leading-[1.35] sm:text-[32px]"
              >
                Memberikan pengalaman menikmati roti berkualitas dengan rasa
                istimewa dan harga yang bersahabat.
              </h2>
            </article>
            <article className="rounded-xl border border-card-line bg-white p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand">
                Visi kami
              </p>
              <h2 className="mt-3 font-display text-[27px] leading-[1.35] text-ink sm:text-[32px]">
                Menjadi bakery pilihan keluarga Indonesia yang menghadirkan
                kebahagiaan dalam setiap gigitan.
              </h2>
            </article>
          </div>

          <div className="mt-12">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                Pegangan kami
              </p>
              <h2 className="mt-2 font-display text-[30px] text-ink sm:text-[38px]">
                Nilai yang terasa di setiap roti.
              </h2>
            </div>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="rounded-xl border border-card-line bg-white p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-blush font-display text-[16px] text-brand">
                    {value.icon}
                  </span>
                  <h3 className="mt-4 font-display text-[20px] text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-5 text-muted">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="bg-white">
        <Container className="py-10 sm:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1fr] lg:gap-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                Dari dapur kami
              </p>
              <h2
                id="process-heading"
                className="mt-2 font-display text-[32px] leading-tight text-ink sm:text-[40px]"
              >
                Proses sederhana, dikerjakan sepenuh hati.
              </h2>
              <ol className="mt-6 space-y-4">
                {bakingSteps.map((step, index) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush font-display text-[18px] text-brand">
                      {index + 1}
                    </span>
                    <span className="text-[13px] font-medium text-ink">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-blush sm:min-h-[390px]">
              <Image
                src="/images/promo/weekend-croissant-coffee.png"
                alt="Pilihan pastry dan minuman di meja bakery"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-md bg-cream/95 px-3 py-2 text-[10px] font-medium text-ink">
                Visual suasana bakery untuk demo
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-reviews-heading" className="bg-linen">
        <Container className="py-10 sm:py-14">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Cerita pelanggan
            </p>
            <h2
              id="about-reviews-heading"
              className="mt-2 font-display text-[30px] text-ink sm:text-[38px]"
            >
              Kebahagiaan yang dibagikan.
            </h2>
          </div>
          <ul className="mt-7 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.id}
                className="rounded-xl border border-card-line bg-white p-5"
              >
                <p className="text-[13px] leading-6 text-quote">
                  “{item.quote}”
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-review-line pt-4">
                  <div className="relative size-10 overflow-hidden rounded-full bg-blush">
                    <Image
                      src={item.avatar}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-ink">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted">{item.city}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-6 text-[12px] font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Jelajahi produk kami
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
