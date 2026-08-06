"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import FoodHighlightSection from "../components/FoodHighlightSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import BookingSection from "../components/BookingSection";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
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
          <ProcessSection />
          <FoodHighlightSection />
          <ServicesSection />
          <GallerySection />
          <TestimonialsSection />
          <BookingSection />
          <Footer />
          <FloatingActions />
        </main>
      )}
    </>
  );
}
