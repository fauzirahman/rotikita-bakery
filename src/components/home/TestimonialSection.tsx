import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StarRating } from "@/components/common/StarRating";
import { Container } from "@/components/layout/Container";
import { testimonials } from "@/lib/home-data";

export function TestimonialSection() {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="bg-linen pb-[52px] pt-[34px] lg:pb-[75px] lg:pt-[49px]"
    >
      <Container>
        <SectionHeading
          eyebrow="Cerita manis mereka"
          titleId="testimonial-heading"
          title="Satu gigitan, banyak kebahagiaan."
        />

        <ul className="mt-[26px] grid gap-4 lg:mt-[37px] lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <li key={item.id}>
              <figure className="flex h-full flex-col rounded-[10px] bg-white px-5 pb-6 pt-5 lg:min-h-[272px] lg:px-[26px] lg:pb-9 lg:pt-[22px]">
                <StarRating className="text-[17px] leading-[27px]" />
                <blockquote className="mt-4 flex-1 pb-5 text-pretty text-[14px] leading-[1.6] text-quote">
                  “{item.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-[14px] border-t border-review-line pt-6">
                  <Image
                    src={item.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 shrink-0 rounded-full bg-blush object-cover"
                  />
                  <div>
                    <p className="text-[13px] font-semibold leading-[20.8px] text-ink">
                      {item.name}
                    </p>
                    <p className="text-[11px] leading-[17.6px] text-muted">
                      {item.city}&nbsp;&nbsp;·&nbsp;&nbsp;Pelanggan RotiKita
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
