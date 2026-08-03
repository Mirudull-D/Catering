"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
import HeroSection from "../components/HeroSection";
import AboutStrip from "../components/AboutStrip";
import PhilosophySection from "../components/PhilosophySection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ProcessSection from "../components/ProcessSection";
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
          <PhilosophySection />
          <GallerySection />
          <TestimonialsSection />
          <ProcessSection />
          <BookingSection />
          <Footer />
          <FloatingActions />
        </main>
      )}
    </>
  );
}
