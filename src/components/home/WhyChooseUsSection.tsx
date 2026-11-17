import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { features } from "@/lib/home-data";

export function WhyChooseUsSection() {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-heading"
      className="scroll-mt-24 bg-cream"
    >
      <Container className="pb-12 pt-[35px] lg:pb-[79px] lg:pt-[41px]">
        <SectionHeading
          eyebrow="Kualitas yang bisa dirasakan"
          titleId="tentang-heading"
          title="Dari dapur kami, untuk Anda."
        />

        <ul className="mt-9 grid grid-cols-2 gap-x-3 gap-y-7 lg:mt-[44px] lg:grid-cols-4 lg:gap-x-4">
          {features.map((feature) => (
            <li key={feature.id} className="flex flex-col items-center text-center">
              <span className="flex size-[60px] items-center justify-center rounded-full bg-blush">
                <Image src={feature.icon} alt="" width={32} height={32} />
              </span>
              <h3 className="mt-[18px] min-h-12 text-balance font-display text-[17px] font-normal leading-6 text-ink lg:min-h-0 lg:text-[18px] lg:leading-[1.5]">
                {feature.title}
              </h3>
              <p className="mt-[11px] text-pretty text-[13px] leading-[1.5] text-muted lg:mt-3 lg:max-w-[240px]">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
