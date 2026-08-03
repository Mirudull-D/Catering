"use client";

import { motion } from 'framer-motion';
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
      <div className={styles.goldTrim}></div>
      
      <div className={styles.cardContent}>
        <div className={styles.icon}>
          {service.icon}
        </div>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.desc}</p>
        <div className={styles.viewBtn}>
          <span>{t('viewDetails')}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  );
}
