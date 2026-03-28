import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WebsitesGallery } from "@/components/sections/WebsitesGallery";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { GamesGallery } from "@/components/sections/GamesGallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { heroContent } from "@/lib/content";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen space-y-24 bg-gradient-to-b from-[#0a0e17] to-[#000] px-6 py-12 outline-none md:space-y-32 md:px-12 md:py-16 lg:space-y-40 lg:px-20 lg:py-20"
      >
        <Hero content={heroContent} />
        <WebsitesGallery />
        <QuoteSection />
        <GamesGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
