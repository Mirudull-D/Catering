"use client";

import styles from './FloatingActions.module.css';

export default function FloatingActions() {
  return (
    <div className={styles.floatingContainer}>
      <a href="tel:+919876543210" className={`${styles.actionBtn} ${styles.callBtn}`} aria-label="Call Us">
        <span className={styles.icon}>📞</span>
        <span className={styles.tooltip}>Call Us</span>
      </a>
      
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.waBtn}`} aria-label="WhatsApp Us">
        <span className={styles.icon}>💬</span>
        <span className={styles.tooltip}>WhatsApp</span>
      </a>
    </div>
  );
}
