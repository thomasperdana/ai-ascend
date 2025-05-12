
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductFeaturesSection from '@/components/sections/ProductFeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AiHeadlineGeneratorSection from '@/components/sections/AiHeadlineGeneratorSection';
import CtaSection from '@/components/sections/CtaSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductFeaturesSection />
        <TestimonialsSection />
        <AiHeadlineGeneratorSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
