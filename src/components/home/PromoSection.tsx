import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/layout/Container";

export function PromoSection() {
  return (
    <section
      id="promo"
      aria-labelledby="promo-heading"
      className="scroll-mt-24 bg-cream"
    >
      <Container className="py-6 lg:py-8">
        <div className="relative overflow-hidden rounded-[14px] bg-brand shadow-[0_20px_42px_rgba(110,65,35,0.16)] lg:grid lg:min-h-[346px] lg:grid-cols-[53.78%_1fr]">
          <div className="px-5 pb-6 pt-[22px] lg:px-[42px] lg:pb-0 lg:pt-[34px]">
            <p className="text-[11px] font-semibold uppercase leading-normal text-peach">
              Akhir pekan, makin manis
            </p>
            <h2
              id="promo-heading"
              className="mt-3 font-display text-[30px] font-normal leading-[36px] text-white lg:text-[41px] lg:leading-[1.5]"
            >
              <span className="block">Special Weekend</span>
              <span className="block">Promotion</span>
            </h2>
            <p className="mt-[14px] text-[14px] leading-[23px] text-cream lg:mt-[13px] lg:leading-[21px]">
              Diskon hingga 30% untuk pilihan roti favorit Anda.
            </p>
            <Button
              href="/products"
              variant="cream"
              className="mt-[18px] h-[52px] w-full rounded-md text-[13px] lg:mt-[29px] lg:h-[51px] lg:w-[187px]"
            >
              Belanja Sekarang&nbsp;&nbsp;
              <span aria-hidden="true">↗</span>
            </Button>
          </div>

          <div className="relative h-[175px] lg:h-auto">
            <Image
              src="/images/promo/weekend-croissant-coffee.png"
              alt="Croissant dan kopi hangat untuk promo akhir pekan"
              fill
              sizes="(min-width: 1024px) 599px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute left-[53.78%] top-[94px] hidden size-[132px] -translate-x-[79px] flex-col items-center rounded-full bg-sand pt-[26px] text-center text-ink lg:flex"
          >
            <span className="text-[10px] font-semibold leading-[15px]">
              HINGGA
            </span>
            <span className="font-display text-[37px] font-normal leading-[55.5px]">
              30%
            </span>
            <span className="-mt-[3px] text-[9px] font-semibold leading-[13.5px]">
              LEBIH HEMAT
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
