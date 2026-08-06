"use client";

import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, onOpenDetails, t }) {
  return (
    <div 
      className={styles.card}
      onClick={onOpenDetails}
    >
      <img 
        src={service.image} 
        alt={service.title} 
        className={styles.cardImage} 
        loading="lazy"
      />
      <div className={styles.overlay}></div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <div className={styles.viewBtn}>
          <span>VIEW DETAILS</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  );
}
