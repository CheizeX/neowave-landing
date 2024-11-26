"use client";

import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import { AdvancedIndicatorsSection } from "@/components/HomePage/AdvancedIndicatorsSection/AdvancedIndicatorsSection";
import Footer from "@/components/HomePage/Footer/Footer";
import { HomePageHero } from "@/components/HomePage/HeroSection/Hero";
import PricingSection from "@/components/HomePage/PricingSection/PricingSection";
import VisionSection from "@/components/HomePage/VisionSection/VisionSection";
import Navbar from "@/components/Navbar/Navbar";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={mainRef}
      className='min-h-screen font-[family-name:var(--font-transducer-hairline)]'>
      <Navbar />
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start h-full w-full '>
        <AnimatedSection id='home-section'>
          <HomePageHero />
        </AnimatedSection>
        <AnimatedSection id='advanced-indicators-section'>
          <AdvancedIndicatorsSection />
        </AnimatedSection>
        <AnimatedSection id='about-section'>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection id='vision-section'>
          <VisionSection />
        </AnimatedSection>
        <AnimatedSection id='pricing-section'>
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection id='footer-section'>
          <Footer />
        </AnimatedSection>
        <ScrollToTopButton show={showScrollButton} />
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  );
}
