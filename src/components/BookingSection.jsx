"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={styles.bookingSection}>
      <div className={styles.container}>
        
        <div className={styles.locationSection}>
          <div className={styles.header}>
            <span className={styles.preTitle}>VISIT US</span>
            <h2 className={styles.sectionTitle}>Our Location</h2>
            <p className={styles.sectionDesc}>Come experience our premium catering services in person</p>
          </div>

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
              Open in Maps →
            </a>
          </motion.div>

          <div className={styles.locationCards}>
            <div className={styles.locationCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className={styles.cardText}>
                <h4>Address</h4>
                <p>123 Catering St, Chennai, TN</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className={styles.cardText}>
                <h4>Business Hours</h4>
                <p>Monday – Sunday<br />10:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className={styles.cardText}>
                <h4>Phone</h4>
                <p>+91 98765 43210<br />+91 98765 43211</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
