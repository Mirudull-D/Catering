"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={styles.bookingSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>{t('contactTitle')}</h2>
          <p className={styles.sectionDesc}>{t('contactDesc')}</p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Form Side */}
          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t('formName')}</label>
                <input type="text" id="name" className={styles.input} required />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">{t('formDate')}</label>
                  <input type="date" id="date" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="guests">{t('formGuests')}</label>
                  <input type="number" id="guests" min="50" className={styles.input} required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="type">{t('formType')}</label>
                <select id="type" className={styles.input} required>
                  <option value="">Select an option</option>
                  <option value="wedding">{t('service1')}</option>
                  <option value="corporate">{t('service2')}</option>
                  <option value="party">{t('service3')}</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">{t('formMessage')}</label>
                <textarea id="message" rows="4" className={styles.textarea}></textarea>
              </div>
              
              <button type="submit" className={`${styles.submitBtn} shimmer-btn`}>
                {t('submitForm')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map Side */}
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h4>{t('phone')}</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <h4>{t('email')}</h4>
                  <p>info@srisankaracatering.com</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>{t('address')}</h4>
                  <p>123 Catering St, Chennai, TN</p>
                </div>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.598501712217!2d80.24317131482298!3d13.061219290797305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526667500350d5%3A0xe543ef6a6358db8a!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1682498523000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
