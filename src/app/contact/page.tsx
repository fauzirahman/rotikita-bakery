import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/home/ContactForm";
import { Container } from "@/components/layout/Container";
import { PageLayout } from "@/components/layout/PageLayout";
import { siteInfo } from "@/lib/home-data";

const contactItems = [
  {
    title: "WhatsApp",
    value: siteInfo.whatsappDisplay,
    href: siteInfo.whatsappUrl,
    icon: "/icons/whatsapp.svg",
  },
  {
    title: "Email",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
    icon: "/icons/email.svg",
  },
];

export default function ContactPage() {
  return (
    <PageLayout activeHref="/contact">
      <PageHero
        breadcrumb="Kontak"
        title="Kami Senang Mendengar Darimu"
        description="Ada pertanyaan, saran, atau ingin bekerja sama? Hubungi tim RotiKita."
        image="/images/promo/weekend-croissant-coffee.png"
        imageAlt="Suasana hangat untuk berbagi cerita dan menikmati roti"
      />

      <section aria-labelledby="contact-options-heading" className="bg-white">
        <Container className="py-10 sm:py-14">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Kami siap membantu
            </p>
            <h2
              id="contact-options-heading"
              className="mt-2 font-display text-[30px] text-ink sm:text-[36px]"
            >
              Hubungi kami dengan cara yang nyaman.
            </h2>
          </div>
          <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="space-y-4">
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      target={item.title === "WhatsApp" ? "_blank" : undefined}
                      rel={
                        item.title === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex min-h-[96px] items-center gap-4 rounded-xl border border-card-line bg-cream p-4 transition-colors hover:border-brand"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush">
                        <Image
                          src={item.icon}
                          alt=""
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-wide text-brand">
                          {item.title}
                        </span>
                        <span className="mt-1 block break-all text-[13px] font-medium text-ink">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-card-line bg-cream p-5">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-brand">
                  Alamat toko
                </p>
                <p className="mt-2 text-[14px] font-medium text-ink">
                  Jl. Contoh Roti No. 12, Jakarta Selatan
                </p>
                <p className="mt-1 text-[11px] leading-5 text-muted">
                  Setiap hari · 07.00–21.00 WIB
                </p>
                <p className="mt-3 rounded-md bg-white px-3 py-2 text-[10px] leading-4 text-muted">
                  Nomor, email, alamat, dan jam operasional pada halaman ini
                  adalah data contoh, bukan informasi bisnis terverifikasi.
                </p>
              </div>

              <Link
                href={siteInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand px-5 text-[12px] font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Hubungi layanan pelanggan via WhatsApp ↗
              </Link>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section aria-labelledby="location-heading" className="bg-cream">
        <Container className="grid gap-6 py-10 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Temukan kami
            </p>
            <h2
              id="location-heading"
              className="mt-2 font-display text-[30px] text-ink sm:text-[36px]"
            >
              Mampir untuk roti yang baru matang.
            </h2>
            <p className="mt-3 text-[13px] leading-6 text-muted">
              Lokasi pada peta adalah placeholder di Jakarta Selatan. Pastikan
              informasi alamat telah diverifikasi sebelum kunjungan.
            </p>
          </div>
          <div
            role="img"
            aria-label="Placeholder peta lokasi contoh di Jakarta Selatan"
            className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl border border-card-line bg-[#f0e5d7] p-5 sm:min-h-[330px]"
            style={{
              backgroundImage:
                "linear-gradient(32deg, transparent 47%, rgba(166,94,53,.13) 48%, rgba(166,94,53,.13) 50%, transparent 51%), linear-gradient(145deg, transparent 42%, rgba(166,94,53,.1) 43%, rgba(166,94,53,.1) 45%, transparent 46%), linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 100% 100%, 36px 36px, 36px 36px",
            }}
          >
            <div className="max-w-[280px] rounded-xl bg-white px-5 py-4 text-center shadow-[0_8px_24px_rgba(51,31,15,0.12)]">
              <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-blush">
                <Image
                  src="/icons/fresh-bread.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
              <p className="mt-2 font-display text-[19px] text-ink">
                RotiKita Bakery
              </p>
              <p className="mt-1 text-[10px] text-muted">
                Peta contoh · Jakarta Selatan
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="faq" aria-labelledby="faq-heading" className="bg-white">
        <Container className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Bantuan
            </p>
            <h2
              id="faq-heading"
              className="mt-2 text-center font-display text-[30px] text-ink sm:text-[36px]"
            >
              Pertanyaan yang sering diajukan.
            </h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {[
                [
                  "Apakah roti dibuat setiap hari?",
                  "Konsep RotiKita mengutamakan roti fresh setiap hari. Detail produksi dan ketersediaan pada demo ini masih berupa informasi contoh.",
                ],
                [
                  "Bagaimana cara melakukan pemesanan?",
                  "Jelajahi katalog untuk melihat pilihan roti. Fitur keranjang pada situs ini merupakan demo dan belum memproses pembayaran.",
                ],
                [
                  "Apakah alamat dan kontak di halaman ini asli?",
                  "Tidak. Nomor, email, alamat, dan jam buka yang ditampilkan adalah data contoh yang belum diverifikasi.",
                ],
              ].map(([question, answer]) => (
                <details key={question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] text-ink marker:hidden">
                    {question}
                    <span
                      aria-hidden="true"
                      className="text-[20px] text-brand transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[12px] leading-6 text-muted">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
