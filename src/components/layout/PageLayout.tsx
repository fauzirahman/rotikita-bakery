import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function PageLayout({
  activeHref,
  children,
}: {
  activeHref: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-cream font-body text-ink">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Header activeHref={activeHref} />
      <main id="konten" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
