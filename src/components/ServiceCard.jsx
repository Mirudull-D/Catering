"use client";

import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, onOpenDetails, t }) {
  return (
    <div className={styles.card} onClick={onOpenDetails}>
      <div className={styles.imageWrapper}>
        <img 
          src={service.image} 
          alt={service.title} 
          className={styles.cardImage} 
          loading="lazy"
        />
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardShortDesc}>{service.desc.substring(0, 60)}...</p>
        
        <div className={styles.viewBtn}>
          <span>VIEW DETAILS</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  );
}
