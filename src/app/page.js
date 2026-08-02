"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
import HeroSection from "../components/HeroSection";
import AboutStrip from "../components/AboutStrip";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import MenuHighlights from "../components/MenuHighlights";
import BookingSection from "../components/BookingSection";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!showSplash && (
        <main>
          <HeroSection />
          <AboutStrip />
          <ServicesSection />
          <GallerySection />
          <TestimonialsSection />
          <MenuHighlights />
          <BookingSection />
          <Footer />
          <FloatingActions />
        </main>
      )}
    </>
  );
}
