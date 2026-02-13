import { Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ParallaxText from '@/components/ParallaxText';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import ParallaxBackground from '@/components/ParallaxBackground';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';
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
  LazyTargetAudienceSection,
} from '@/components/LazySection';

const Index = () => {
  const { lang } = useLanguage();

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <ParallaxBackground />
        <ExitIntentPopup />
        <Header />
        <main>
          <HeroSection />
          
          <div className="py-8 bg-card/50 border-y border-border overflow-hidden">
            <ParallaxText baseVelocity={-2} className="text-2xl font-bold text-primary/20">
              {t(translations.marquee.text, lang)}
            </ParallaxText>
          </div>
          
          <LazyAboutSection />
          <LazyProductsSection />
          <LazyServicesSection />
          <LazyTargetAudienceSection />
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
