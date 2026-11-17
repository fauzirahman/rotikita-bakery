import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/home/NewsletterForm";

export function NewsletterSection() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-cream pb-[17px] pt-[35px] lg:pb-[47px] lg:pt-[47px]"
    >
      <Container>
        <SectionHeading
          eyebrow="Jangan lewatkan kabar manisnya"
          titleId="newsletter-heading"
          title="Dapatkan Promo Spesial dari Kami"
        />
        <p className="mx-auto mt-[14px] max-w-[640px] text-center text-[14px] leading-[23px] text-muted lg:mt-[8px] lg:leading-[1.6]">
          Jadi yang pertama tahu koleksi terbaru, penawaran eksklusif, dan
          cerita dari dapur kami.
        </p>

        <NewsletterForm />

        <p className="mt-[14px] text-center text-[10px] leading-[1.6] text-muted">
          Tanpa spam. Hanya hal-hal yang manis.
        </p>
      </Container>
    </section>
  );
}
