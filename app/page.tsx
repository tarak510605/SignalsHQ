import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LogoCloud } from '@/components/LogoCloud';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { DemoSection } from '@/components/DemoSection';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Security } from '@/components/Security';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogoCloud />
      <ProductShowcase />
      <Stats />
      <Features />
      <DemoSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Security />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
