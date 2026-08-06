"use client";

import { motion } from 'framer-motion';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  const trustFeatures = [
    {
      id: "01",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
      ),
      title: "Fresh Ingredients",
      desc: "Locally sourced, premium quality ingredients for every single dish."
    },
    {
      id: "02",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      title: "Expert Chefs",
      desc: "Decades of authentic culinary experience spanning diverse regional cuisines."
    },
    {
      id: "03",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
      ),
      title: "Hygiene First",
      desc: "Strict adherence to safety and hygiene protocols during prep and service."
    },
    {
      id: "04",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      ),
      title: "Transparent Pricing",
      desc: "Honest, straightforward packages. No hidden fees or last-minute surprises."
    }
  ];

  return (
    <section className={`${styles.trustSection}`}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.preTitle}>WHY CHOOSE US</span>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Built on Trust.
            </motion.h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              Chennai's most reliable catering partner since day one.<br/> Experience flawless service and exceptional taste.
            </p>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {trustFeatures.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{feature.icon}</div>
                <span className={styles.bgNumber}>{feature.id}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
