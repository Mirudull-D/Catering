"use client";

import { motion, AnimatePresence } from 'framer-motion';
import styles from './BookingModal.module.css';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const name = document.getElementById('b-name').value;
    const phone = document.getElementById('b-phone').value;
    const occasion = document.getElementById('b-occasion').value;
    const text = `Hi, I would like to enquire about catering.%0A%0AName: ${name}%0APhone: ${phone}%0AOccasion: ${occasion}`;
    window.open(`https://wa.me/919840874966?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className={styles.modalOverlay} onClick={onClose}>
        <motion.div 
          className={styles.modalContent}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
          
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Book Your Event</h2>
            <p className={styles.modalDesc}>Fill out the details below and we'll get back to you immediately.</p>
          </div>
          
          <form className={styles.form} onSubmit={handleWhatsApp}>
            <div className={styles.formGroup}>
              <label htmlFor="b-name">Full Name</label>
              <input type="text" id="b-name" className={styles.input} placeholder="John Doe" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="b-phone">Phone Number</label>
              <input type="tel" id="b-phone" className={styles.input} placeholder="+91 98408 74966" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="b-occasion">Occasion</label>
              <select id="b-occasion" className={styles.input} required>
                <option value="">Select an occasion...</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className={styles.modalActions}>
              <button type="submit" className={styles.waBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp Enquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
