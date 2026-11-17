import { BestSellerSection } from "@/components/home/BestSellerSection";
import { CategorySection } from "@/components/home/CategorySection";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { PromoSection } from "@/components/home/PromoSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream font-body text-ink">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Header activeHref="/" />
      <main id="konten" className="flex-1">
        <HeroSection />
        <CategorySection />
        <BestSellerSection />
        <PromoSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
