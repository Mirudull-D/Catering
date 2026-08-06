"use client";

import styles from './FloatingActions.module.css';

export default function FloatingActions() {
  return (
    <div className={styles.floatingContainer}>
      <a href="tel:+919876543210" className={`${styles.actionBtn} ${styles.callBtn}`} aria-label="Call Us">
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </span>
        <span className={styles.tooltip}>Call Us</span>
      </a>
      
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.waBtn}`} aria-label="WhatsApp Us">
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.78 0-3.522-.477-5.048-1.38l-.362-.215-3.75.983.999-3.656-.236-.375C2.686 15.602 2.14 13.67 2.14 11.642c0-5.32 4.328-9.648 9.648-9.648 5.32 0 9.648 4.328 9.648 9.648 0 5.32-4.328 9.648-9.648 9.648m0-21.055C5.452.788.077 6.163.077 12.788c0 2.114.552 4.179 1.603 5.999L0 24.876l6.262-1.642c1.756.957 3.742 1.463 5.79 1.463 6.625 0 12-5.375 12-12s-5.375-12-12-12"></path>
          </svg>
        </span>
        <span className={styles.tooltip}>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
