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
import ShuffleHero from '@/components/SuffleHero';
import { SmoothScrollHero } from '@/components/SmoothScrollParallax';
import HorizontalScrollCarousel from '@/components/HorizontalScrollCarousel';

export default function Home() {
  return (
    <>
      
      <main>
        <ShuffleHero />
        <SmoothScrollHero />
        {/* <HeroSection /> */}
        {/* <ProductSnapshotRow /> */}
        {/* <AboutUsCta /> */}
        <BenefitsSection />
        <HorizontalScrollCarousel />
        {/* <ProductsSection /> */}
        <PopularFood />
        
        <TestimonialsSection />
        <FAQSection />
        <ConnectWithUsSection />

      </main>
    </>
  );
}