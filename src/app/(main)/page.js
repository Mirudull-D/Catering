"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import SplashScreen from "../../components/SplashScreen";
import HeroSection from "../../components/HeroSection";
import InteractiveMenuExplorer from "../../components/InteractiveMenuExplorer";
import ProcessSection from "../../components/ProcessSection";
import FoodHighlightSection from "../../components/FoodHighlightSection";
import InteractiveDishPoll from "../../components/InteractiveDishPoll";
import ServicesSection from "../../components/ServicesSection";
import GallerySection from "../../components/GallerySection";
import TestimonialsSection from "../../components/TestimonialsSection";
import BookingSection from "../../components/BookingSection";
import Footer from "../../components/Footer";
import FloatingActions from "../../components/FloatingActions";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!showSplash && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <HeroSection />
          <InteractiveMenuExplorer />
          <ProcessSection />
          <FoodHighlightSection />
          <InteractiveDishPoll />
          <ServicesSection />
          <GallerySection />
          <TestimonialsSection />
          <BookingSection />
          <Footer />
          <FloatingActions />
        </motion.main>
      )}
    </LayoutGroup>
  );
}
