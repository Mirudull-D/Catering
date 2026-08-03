"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './AboutStrip.module.css';

const ChefHatIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
    <line x1="6" y1="17" x2="18" y2="17" />
  </svg>
);

const GuestsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const StarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const StatCounter = ({ end, label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16); // roughly 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statIcon}>{icon}</div>
      <h3 className={styles.statNumber}>{count}+</h3>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
};

export default function AboutStrip() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <motion.blockquote 
            className={styles.storyContainer}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardWave}>
              <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0,50 C320,100 420,0 720,50 C1020,100 1120,0 1440,50 L1440,100 L0,100 Z" fill="var(--color-white)"/>
              </svg>
            </div>
            <div className={styles.quoteMark}>"</div>
            <p className={styles.brandStory}>{t('aboutStory')}</p>
            <div className={styles.goldRule}></div>
          </motion.blockquote>
        </div>

        <div className={styles.statsGrid}>
          <StatCounter end={15} label={t('statYears')} icon={<ChefHatIcon />} />
          <StatCounter end={500} label={t('statEvents')} icon={<GuestsIcon />} />
          <StatCounter end={12} label={t('statCities')} icon={<CityIcon />} />
          <StatCounter end={1000} label={t('statClients')} icon={<StarIcon />} />
        </div>
      </div>
    </section>
  );
}
