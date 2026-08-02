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
      <motion.h1
        className={`${styles.splashTitle} ${lang === 'ta' ? 'tamilTitle' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {t('title')}
      </motion.h1>
      
      <div className={styles.imageWrapper}>
        <motion.div 
          className={styles.glowRing}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.img
          src="/deity.png"
          alt="Deity"
          layoutId="deity-image"
          className={styles.splashImage}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>
    </motion.div>
  );
}
