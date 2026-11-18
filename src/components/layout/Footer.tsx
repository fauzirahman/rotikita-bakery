import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FooterNewsletter } from "@/components/layout/FooterNewsletter";
import { Logo } from "@/components/layout/Logo";
import { footerColumns, siteInfo } from "@/lib/home-data";

const linkClass = "transition-colors hover:text-white";

export function Footer() {
  return (
    <footer id="kontak" className="scroll-mt-24 bg-ink text-footer-text">
      <Container className="pb-8 pt-[37px] lg:pb-[54px] lg:pt-[49px]">
        <div className="lg:grid lg:grid-cols-[415fr_273fr_327fr_281fr]">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-[25px] max-w-[335px] text-[13px] leading-[1.6]">
              Menghadirkan kebahagiaan lewat roti fresh berkualitas, dibuat
              dengan cinta untuk setiap momen Anda.
            </p>
            <p className="mt-[30px] text-[12px] leading-[1.6] text-sand">
              {siteInfo.hours}
            </p>
          </div>

          {/* Link columns: side by side on mobile, direct grid cells on lg */}
          <div className="mt-[39px] grid grid-cols-2 gap-x-5 lg:contents">
            {footerColumns.map((column) => (
              <div key={column.title} className="lg:pt-3">
                <h3 className="font-display text-[17px] leading-[27px] text-cream">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col lg:mt-6 lg:gap-[15px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex min-h-11 items-center text-[12px] leading-[1.6] lg:min-h-0 ${linkClass}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-[19px] border-t border-footer-line pt-[27px] lg:mt-0 lg:border-t-0 lg:pt-3">
            <h3 className="font-display text-[18px] leading-[27px] text-cream lg:text-[17px]">
              Mari Terhubung
            </h3>

            {/* Desktop: icon rows */}
            <ul className="mt-7 hidden flex-col gap-4 lg:flex">
              <li>
                <a
                  href={siteInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-[11px] text-[12px] leading-[1.6] ${linkClass}`}
                >
                  <Image src="/icons/whatsapp.svg" alt="" width={22} height={22} />
                  {siteInfo.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className={`flex items-center gap-[11px] text-[12px] leading-[1.6] ${linkClass}`}
                >
                  <Image src="/icons/email.svg" alt="" width={22} height={22} />
                  {siteInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-[34px] hidden items-center lg:flex">
              <a
                href={siteInfo.instagramUrl}
                className={`flex w-[154px] items-center gap-[11px] text-[12px] leading-[1.6] ${linkClass}`}
              >
                <Image src="/icons/instagram.svg" alt="" width={22} height={22} />
                Instagram
              </a>
              <a
                href={siteInfo.facebookUrl}
                className={`text-[12px] leading-[1.6] ${linkClass}`}
              >
                Facebook ↗
              </a>
            </div>

            {/* Mobile: text rows */}
            <ul className="mt-3 text-[13px] lg:hidden">
              <li>
                <a
                  href={siteInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-h-11 items-center ${linkClass}`}
                >
                  WhatsApp · {siteInfo.whatsappDisplay} ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className={`flex min-h-11 items-center ${linkClass}`}
                >
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex gap-8">
                <a
                  href={siteInfo.instagramUrl}
                  className={`flex min-h-11 items-center ${linkClass}`}
                >
                  Instagram ↗
                </a>
                <a
                  href={siteInfo.facebookUrl}
                  className={`flex min-h-11 items-center ${linkClass}`}
                >
                  Facebook ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <FooterNewsletter />

        <div className="mt-9 border-t border-footer-line pt-7 text-[11px] leading-[1.6] text-footer-muted lg:mt-[79px] lg:flex lg:items-start lg:justify-between lg:pt-[31px]">
          <p>
            © {siteInfo.copyrightYear} RotiKita Bakery. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="mt-3 lg:mt-0">Dibuat dengan cinta. Dinikmati bersama.</p>
        </div>
      </Container>
    </footer>
  );
}
