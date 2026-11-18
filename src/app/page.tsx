import { BestSellerSection } from "@/components/home/BestSellerSection";
import { CategorySection } from "@/components/home/CategorySection";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { PromoSection } from "@/components/home/PromoSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { PageLayout } from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout activeHref="/">
        <HeroSection />
        <CategorySection />
        <BestSellerSection />
        <PromoSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <NewsletterSection />
    </PageLayout>
  );
}
