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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
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
  );
};

export default Index;
