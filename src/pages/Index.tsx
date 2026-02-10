import { Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ParallaxText from '@/components/ParallaxText';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import ParallaxBackground from '@/components/ParallaxBackground';
import SectionSkeleton, {
  LazyAboutSection,
  LazyProductsSection,
  LazyServicesSection,
  LazyCasesSection,
  LazyCalculatorSection,
  LazyDemoSection,
  LazyAdvantagesSection,
  LazyReviewsSection,
  LazyFAQSection,
  LazyContactsSection,
} from '@/components/LazySection';

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <ParallaxBackground />
        <ExitIntentPopup />
        <Header />
        <main>
          {/* Hero section loads immediately - above the fold */}
          <HeroSection />
          
          {/* Scrolling text marquee */}
          <div className="py-8 bg-card/50 border-y border-border overflow-hidden">
            <ParallaxText baseVelocity={-2} className="text-2xl font-bold text-primary/20">
              AI AGENTS • AUTOMATION • MACHINE LEARNING • NEURAL NETWORKS •
            </ParallaxText>
          </div>
          
          {/* Lazy-loaded sections with code splitting */}
          <LazyAboutSection />
          <LazyProductsSection />
          <LazyServicesSection />
          <LazyCasesSection />
          <LazyCalculatorSection />
          <LazyDemoSection />
          <LazyAdvantagesSection />
          <LazyReviewsSection />
          <LazyFAQSection />
          <LazyContactsSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
