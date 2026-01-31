import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CasesSection from '@/components/CasesSection';
import DemoSection from '@/components/DemoSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import SmoothScroll from '@/components/SmoothScroll';
import ParallaxText from '@/components/ParallaxText';

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Custom cursor glow effect */}
        <CursorGlow />
        
        <Header />
        <main>
          <HeroSection />
          
          {/* Scrolling text marquee */}
          <div className="py-8 bg-card/50 border-y border-border overflow-hidden">
            <ParallaxText baseVelocity={-2} className="text-2xl font-bold text-primary/20">
              AI AGENTS • AUTOMATION • MACHINE LEARNING • NEURAL NETWORKS •
            </ParallaxText>
          </div>
          
          <AboutSection />
          <ServicesSection />
          <CasesSection />
          <DemoSection />
          <AdvantagesSection />
          <ReviewsSection />
          <FAQSection />
          <ContactsSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
