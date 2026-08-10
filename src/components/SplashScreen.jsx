"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const { lang, t } = useLanguage();

  return (
    <motion.div
      key="splash"
      className={styles.splashScreen}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Corner ornaments */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      {/* Floating food decorations — pure CSS, zero JS cost */}
      <span className={`${styles.floatItem} ${styles.float1}`}>🪷</span>
      <span className={`${styles.floatItem} ${styles.float2}`}>🌿</span>
      <span className={`${styles.floatItem} ${styles.float3}`}>✨</span>
      <span className={`${styles.floatItem} ${styles.float4}`}>🌸</span>
      <span className={`${styles.floatItem} ${styles.float5}`}>🍃</span>

      {/* "Since 2009" brand strip */}
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

      <motion.h1
        className={`${styles.splashTitle} ${lang === 'ta' ? 'tamilTitle' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        {t('title')}
      </motion.h1>

      <div className={styles.imageWrapper}>
        <div className={styles.glowRingOuter} />
        <div className={styles.glowRing} />
        <motion.img
          src="/deity.png"
          alt="Deity"
          layoutId="deity-image"
          className={styles.splashImage}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {lang === 'ta'
          ? 'தெய்வீக விருந்து, உங்கள் நினைவுகளுக்காக'
          : 'Divine Feasts, Crafted for Your Memories'}
      </motion.p>

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
  );
}
