"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './AboutStrip.module.css';

const StatCounter = ({ end, label }) => {
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
        <motion.div 
          className={styles.storyContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="animate-line" style={{ margin: '0 auto 1.5rem' }}></div>
          <p className={styles.brandStory}>{t('aboutStory')}</p>
          <div className="animate-line" style={{ margin: '1.5rem auto 0' }}></div>
        </motion.div>

        <div className={styles.statsGrid}>
          <StatCounter end={15} label={t('statYears')} />
          <StatCounter end={500} label={t('statEvents')} />
          <StatCounter end={12} label={t('statCities')} />
          <StatCounter end={1000} label={t('statClients')} />
        </div>
      </div>
    </section>
  );
}
