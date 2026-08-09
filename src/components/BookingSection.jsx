"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={styles.bookingSection}>
      <div className={styles.container}>
        
        <div className={styles.locationContainer}>
          {/* Left Dark Card */}
          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.preTitle}>{t('visitUs')}</span>
            <h2 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
              {t('bookingTitle')}
            </h2>

            <div className={styles.infoBlock}>
              <h4>{t('address')}</h4>
              <p style={{ whiteSpace: 'pre-line' }}>{t('bookingAddress')}</p>
            </div>

            <div className={styles.infoBlock}>
              <h4>{t('hours')}</h4>
              <p>{t('bookingHours')}</p>
            </div>

            <div className={styles.infoBlock}>
              <h4>{t('bookingPhoneLabel')}</h4>
              <p className={styles.highlightText}>+91 98408 74966</p>
            </div>

            <div className={styles.infoBlock}>
              <h4>{t('bookingInstaLabel')}</h4>
              <p className={styles.highlightText}>@srisankaracatering</p>
            </div>

            <div className={styles.buttonGroup}>
              <a href="https://wa.me/919840874966" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                {t('waBooking')}
              </a>
              <a href="https://maps.google.com/?q=Kattankulathur,+Tamil+Nadu" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                {t('directions')}
              </a>
            </div>
          </motion.div>

          {/* Right Map */}
          <motion.div 
            className={styles.mapCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.301382583852!2d80.0242207148201!3d12.823793690952044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76c4fb24e6b%3A0x6b4476686150242!2sKattankulathur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1682498523000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
