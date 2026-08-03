"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.processSection}>
      {/* Curved SVG Wave Divider blending with the section above */}
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className={styles.waveSvg}>
          <path 
            d="M0,0 C320,60 720,80 1440,0 L1440,80 L0,80 Z" 
            fill="var(--color-off-white)"
          />
        </svg>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.tagline}>{t('about') || 'Process'}</span>
          <h2 className={styles.title}>{t('procTitle')}</h2>
          <p className={styles.subtitle}>{t('procSub')}</p>
        </motion.div>

        <div className={styles.stepsGrid}>
          <motion.div 
            className={styles.stepCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardBadge}>01</span>
              <h3 className={styles.cardTitle}>{t('step1Title')}</h3>
            </div>
            <p className={styles.cardDesc}>{t('step1Desc')}</p>
          </motion.div>

          <motion.div 
            className={styles.stepCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardBadge}>02</span>
              <h3 className={styles.cardTitle}>{t('step2Title')}</h3>
            </div>
            <p className={styles.cardDesc}>{t('step2Desc')}</p>
          </motion.div>

          <motion.div 
            className={styles.stepCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardBadge}>03</span>
              <h3 className={styles.cardTitle}>{t('step3Title')}</h3>
            </div>
            <p className={styles.cardDesc}>{t('step3Desc')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
