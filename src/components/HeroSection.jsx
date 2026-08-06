"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import styles from './HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useLanguage();
  const { openBookingModal } = useBooking();

  return (
    <section className={`${styles.hero} bg-grid`}>
      <div className={styles.heroContent}>
        
        {/* Left: Text */}
        <div className={styles.textContainer}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Premium Catering Services · Chennai
          </div>

          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Experience <br />
            pure <span className={styles.highlight}>culinary<br />joy.</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Premium catering for weddings, corporate events, and celebrations — delivered with devotion.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button className={styles.primaryButton} onClick={openBookingModal}>
              Book Your Event <span className={styles.arrow}>→</span>
            </button>
            <Link href="#services" className={styles.secondaryButton}>
              Our Services
            </Link>
          </motion.div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <h3 className={styles.statNum}>15<span className={styles.statPlus}>+</span></h3>
              <p className={styles.statLabel}>YEARS EXP.</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h3 className={styles.statNum}>500<span className={styles.statPlus}>+</span></h3>
              <p className={styles.statLabel}>EVENTS DONE</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h3 className={styles.statNum}>10K<span className={styles.statPlus}>+</span></h3>
              <p className={styles.statLabel}>GUESTS SERVED</p>
            </div>
          </div>
        </div>

        {/* Right: Deity Image */}
        <div className={styles.imageContainer}>
          <motion.div 
            className={styles.deityFrame}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <img src="/deity.png" alt="Divine Blessing" className={styles.deityImage} />

            {/* Floating review badge */}
            <motion.div 
              className={styles.floatingReview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>"The most delicious catering experience ever."</p>
              <p className={styles.reviewAuthor}>— Ananya S., Wedding Client</p>
            </motion.div>

            {/* Floating badge top */}
            <motion.div
              className={styles.floatingBadge}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <span className={styles.badgeIcon}>🍛</span>
              <div>
                <p className={styles.badgeLabel}>Authentic Cuisine</p>
                <p className={styles.badgeSub}>South Indian & Multi-Cuisine</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
