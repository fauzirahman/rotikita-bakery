import Image from "next/image";
import { Button } from "@/components/common/Button";
import { StarRating } from "@/components/common/StarRating";
import { Container } from "@/components/layout/Container";

function HeroRating({ className }: { className?: string }) {
  return (
    <div className={className}>
      <StarRating className="text-[19px] leading-[28.5px]" />
      <p className="text-[12px] leading-[18px] text-muted">
        4,9/5 dari 1.200+ pelanggan bahagia
      </p>
    </div>
  );
}

function HeroRatingMobile({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-[5px]">
        <StarRating className="text-[15px] leading-[23px]" />
        <p className="text-[12px] leading-[18px] text-muted">
          4,9/5 · 1.200+ pelanggan bahagia
        </p>
      </div>
      <p className="mt-2 text-[12px] leading-[18px] text-muted">
        100% fresh. Dipanggang setiap pagi.
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="bg-cream">
      <Container>
        <div className="grid pb-8 pt-[30px] lg:h-[670px] lg:grid-cols-2 lg:pb-0 lg:pt-0">
          <div className="lg:pt-[76px]">
            <p className="text-[11px] font-semibold uppercase leading-[16.5px] text-brand">
              Hangat dari oven, tulus dari hati
            </p>
            <h1
              id="hero-heading"
              className="mt-[18px] font-display text-[42px] font-normal leading-[48px] text-ink sm:text-[56px] sm:leading-[63px] xl:text-[67px] xl:leading-[75.71px]"
            >
              <span className="block">Roti Fresh,</span>
              <span className="block">Kebahagiaan</span>
              <span className="block">Setiap Hari</span>
            </h1>
            <p className="mt-[26px] max-w-[480px] text-[15px] leading-[26px] text-muted lg:text-[16px] lg:leading-7">
              Nikmati berbagai pilihan roti fresh dengan bahan berkualitas, rasa
              istimewa, dan harga bersahabat.
            </p>

            <div className="mt-[26px] flex gap-3 lg:mt-[29px] lg:gap-4">
              <Button
                href="/products"
                className="h-[52px] flex-1 rounded-[7px] text-[14px] lg:h-[54px] lg:w-[199px] lg:flex-none lg:justify-between lg:pl-5 lg:pr-4"
              >
                Belanja Sekarang
                <Image
                  src="/icons/shop-arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="hidden lg:block"
                />
              </Button>
              <Button
                href="/#kategori"
                variant="outline"
                className="h-[52px] flex-1 rounded-[7px] text-[14px] lg:h-[54px] lg:w-[162px] lg:flex-none"
              >
                Lihat Koleksi
              </Button>
            </div>

            <HeroRating className="mt-12 hidden lg:block" />
          </div>

          <div className="relative mt-7 lg:mt-[28px] lg:self-start">
            <div className="relative h-[270px] overflow-hidden rounded-bl-[12px] rounded-br-[70px] rounded-tl-[70px] rounded-tr-[12px] bg-blush sm:h-[400px] lg:h-[594px] lg:rounded-bl-[16px] lg:rounded-br-[140px] lg:rounded-tl-[140px] lg:rounded-tr-[16px]">
              <Image
                src="/images/hero/artisan-bread.png"
                alt="Aneka roti artisan segar dalam keranjang anyaman"
                fill
                preload
                sizes="(min-width: 1024px) 648px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute left-[-42px] top-[460px] hidden h-[90px] w-[218px] items-center gap-[15px] rounded-[10px] bg-white pl-[18px] shadow-[0_8px_24px_rgba(51,31,15,0.09)] lg:flex">
              <Image
                src="/icons/fresh-bread.svg"
                alt=""
                width={27}
                height={27}
              />
              <div>
                <p className="font-display text-[17px] font-medium leading-[25.5px] text-ink">
                  100% Fresh
                </p>
                <p className="text-[11px] leading-[16.5px] text-muted">
                  Dipanggang setiap pagi
                </p>
              </div>
            </div>
          </div>

          <HeroRatingMobile className="mt-[27px] lg:hidden" />
        </div>
      </Container>
    </section>
  );
}
