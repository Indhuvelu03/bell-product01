// app/page.js
import Header from '../components/header';
import HeroSection from '../components/HeroSection';
import ProductSnapshotRow from '../components/ProductSnapshotRow';
import AboutUsCta from '../components/AboutUsCta';
import BenefitsSection from '../components/BenefitsSection';
import ProductsSection from '../components/ProductSlider';
import TestimonialsSection from '@/components/TestimonialsSection';
import PopularFood from '../components/PopularFood';
import FAQSection from '@/components/FAQSection';
import ConnectWithUsSection from '@/components/ConnectWithUsSection';

export default function Home() {
  return (
    <>
      
      <main>
        <HeroSection />
        <ProductSnapshotRow />
        <AboutUsCta />
        <BenefitsSection />
        <ProductsSection />
        <PopularFood />
        
        <TestimonialsSection />
        <FAQSection />
        <ConnectWithUsSection />

      </main>
    </>
  );
}