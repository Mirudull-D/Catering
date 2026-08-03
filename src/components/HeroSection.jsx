"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.overlay}></div>
        {/* We use an img tag for background to keep it simple, but styled as object-fit cover */}
        <img src="/hero-image.png" alt="Catering Background" className={styles.bgImage} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('heroHeadline1')} <span className={styles.highlight}>{t('heroHeadline2')}</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('heroDesc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="#gallery" className={`${styles.primaryButton} shimmer-btn`}>
              {t('gallery')}
            </Link>
          </motion.div>
        </div>

        <div className={styles.imageContainer}>
          <motion.div 
            className={styles.decorativeFrame}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/deity.png"
              alt="Murugan Blessing"
              layoutId="deity-image"
              className={styles.heroImage}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
