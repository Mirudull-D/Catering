"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  return (
    <div className={styles.splashWrapper}>
      {/* Left Horizontal Sliding Door Panel */}
      <motion.div
        className={`${styles.doorPanel} ${styles.doorLeft}`}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
      />

      {/* Right Horizontal Sliding Door Panel */}
      <motion.div
        className={`${styles.doorPanel} ${styles.doorRight}`}
        exit={{ x: "100%" }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
      />

      {/* Glowing Seam Line Down Center */}
      <motion.div 
        className={styles.centerSeam}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Foreground Splash Content */}
      <motion.div
        className={styles.splashContent}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4 }}
      >
        {/* Corner Ornaments */}
        <div className={styles.cornerTL} />
        <div className={styles.cornerTR} />
        <div className={styles.cornerBL} />
        <div className={styles.cornerBR} />

        {/* Floating Ambient Botanical / Divine Icons */}
        <span className={`${styles.floatItem} ${styles.float1}`}>🪷</span>
        <span className={`${styles.floatItem} ${styles.float2}`}>🌿</span>
        <span className={`${styles.floatItem} ${styles.float3}`}>✨</span>
        <span className={`${styles.floatItem} ${styles.float4}`}>🌸</span>
        <span className={`${styles.floatItem} ${styles.float5}`}>🍃</span>

        {/* Brand Strip */}
        <motion.div
          className={styles.brandStrip}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className={styles.brandLine} />
          <span className={styles.brandLabel}>SINCE 2009</span>
          <div className={`${styles.brandLine} ${styles.brandLineRight}`} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className={`${styles.splashTitle} ${lang === 'ta' ? 'tamilTitle' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {t('title')}
        </motion.h1>

        {/* Deity Image Frame with Shared Layout Transition */}
        <div className={styles.imageWrapper}>
          <div className={styles.glowRingOuter} />
          <div className={styles.glowRing} />
          <motion.img
            layoutId="deity-image"
            src="/deity.png"
            alt="Sri Sankaraa Catering Deity"
            className={styles.splashImage}
            transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {lang === 'ta'
            ? 'தெய்வீக விருந்து, உங்கள் நினைவுகளுக்காக'
            : 'Divine Feasts Crafted for Your Memories'}
        </motion.p>

        {/* Progress Bar Container */}
        <div className={styles.loadingContainer}>
          <div className={styles.loadingBar}>
            <motion.div
              className={styles.loadingProgress}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
          <p className={styles.loadingText}>
            {lang === 'ta' ? 'தயாராகிறது...' : 'Preparing divine feast...'}
          </p>
        </div>

      </motion.div>
    </div>
  );
}
