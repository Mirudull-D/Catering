"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={styles.bookingSection}>
      <div className={styles.container}>
        {/* Enquiry Form Sub-section */}
        <div className={styles.formSection}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.tagline}>{t('contactTag') || 'Enquiry'}</span>
            <h2 className={styles.sectionTitle}>{t('contactTitle')}</h2>
            <p className={styles.sectionDesc}>{t('contactDesc')}</p>
          </motion.div>

          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
        </div>

        {/* Location Sub-section (Matching Screenshot) */}
        <div className={styles.locationSection}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.tagline}>{t('locationTag') || 'Visit Us'}</span>
            <h2 className={styles.sectionTitle}>{t('locationTitle') || 'Our Store Location'}</h2>
            <p className={styles.sectionDesc}>{t('locationDesc') || 'Come experience our premium catering services in person'}</p>
          </motion.div>

          <motion.div 
            className={styles.mapWrapper}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
            
            <a 
              href="https://maps.google.com/?q=Chennai,+Tamil+Nadu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.openMapBtn}
            >
              <span>📍</span> {t('openInMap') || 'Open in Map'}
            </a>
          </motion.div>

          <div className={styles.locationCards}>
            <div className={styles.locationCard}>
              <div className={styles.cardIcon}>📍</div>
              <div className={styles.cardText}>
                <h4>{t('address')}</h4>
                <p>123 Catering St, Chennai, TN</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.cardIcon}>🕒</div>
              <div className={styles.cardText}>
                <h4>{t('hours') || 'Business Hours'}</h4>
                <p>Monday – Sunday<br />10:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.cardIcon}>📞</div>
              <div className={styles.cardText}>
                <h4>{t('phone')}</h4>
                <p>+91 98765 43210<br />+91 98765 43211</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
