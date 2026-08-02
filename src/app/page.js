"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className={styles.splashScreen}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={styles.splashTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              BluePlate Catering
            </motion.h1>
            <motion.img
              src="/deity.png"
              alt="Deity"
              layoutId="deity-image"
              className={styles.splashImage}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <motion.h1 
                className={styles.heroTitle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Exceptional Catering for <span>Memorable Events</span>
              </motion.h1>
              <motion.p 
                className={styles.heroDescription}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                We bring culinary excellence and classic elegance to your weddings, corporate gatherings, and private parties. Experience a seamless blend of gourmet flavors and impeccable service.
              </motion.p>
              <motion.button 
                className={styles.primaryButton}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                View Our Menus
              </motion.button>
            </div>
            <div className={styles.heroImageContainer}>
              <motion.img
                src="/deity.png"
                alt="Deity image"
                layoutId="deity-image"
                className={styles.heroImage}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
