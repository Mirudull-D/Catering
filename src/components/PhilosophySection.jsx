"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './PhilosophySection.module.css';

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* Image Column with premium gold frame accent */}
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageFrame}>
              <img 
                src="/gallery/south_indian_meals_1785684185063.png" 
                alt="Our Culinary Philosophy" 
                className={styles.image}
              />
              <div className={styles.goldCornerTopRight}></div>
              <div className={styles.goldCornerBottomLeft}></div>
            </div>
          </motion.div>

          {/* Text Column with description and points */}
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.tagline}>{t('about') || 'About Us'}</span>
            <h2 className={styles.title}>{t('philTitle')}</h2>
            <p className={styles.subtitle}>{t('philSub')}</p>
            
            <p className={styles.desc}>{t('philDesc1')}</p>
            <p className={styles.desc}>{t('philDesc2')}</p>
            
            <ul className={styles.pointsList}>
              <li className={styles.pointItem}>
                <span className={styles.pointIcon}>✦</span>
                <span>{t('philPoint1')}</span>
              </li>
              <li className={styles.pointItem}>
                <span className={styles.pointIcon}>✦</span>
                <span>{t('philPoint2')}</span>
              </li>
              <li className={styles.pointItem}>
                <span className={styles.pointIcon}>✦</span>
                <span>{t('philPoint3')}</span>
              </li>
            </ul>

            <motion.a 
              href="#contact" 
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('bookNow')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
