"use client";

import { motion } from 'framer-motion';
import styles from './ProcessSection.module.css';

const features = [
  {
    id: "01",
    icon: "🌿",
    title: "Fresh Ingredients",
    desc: "Locally sourced, farm-fresh produce for every event we cater."
  },
  {
    id: "02",
    icon: "👨‍🍳",
    title: "Expert Chefs",
    desc: "Master chefs with decades of authentic South Indian culinary experience."
  },
  {
    id: "03",
    icon: "✅",
    title: "Hygiene Certified",
    desc: "Strict FSSAI hygiene protocols from kitchen to your plate."
  },
  {
    id: "04",
    icon: "💬",
    title: "Transparent Pricing",
    desc: "Honest, upfront packages — no hidden charges, ever."
  }
];

export default function ProcessSection() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.container}>

        {/* Top: Title row */}
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <span className={styles.preTitle}>WHY CHOOSE US</span>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Built on <span className={styles.titleAccent}>Trust.</span>
            </motion.h2>
          </div>
          <div className={styles.topRight}>
            <p className={styles.subtitle}>
              15+ years of serving Chennai's finest events with heart, skill, and devotion. 
              We don't just cater — we create memories.
            </p>
          </div>
        </div>

        {/* Middle: Big stat + Image + Features grid */}
        <div className={styles.mainGrid}>

          {/* Left: Big image card */}
          <motion.div
            className={styles.imageCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="/gallery/buffet_setup_1785684198318.png" alt="Our Catering Setup" className={styles.trustImage} />
            <div className={styles.imageOverlay}>
              <div className={styles.imageStat}>
                <span className={styles.imageStatNum}>500+</span>
                <span className={styles.imageStatLabel}>Events Served</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature list */}
          <div className={styles.featuresCol}>
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                className={styles.featureRow}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom: Stat bar */}
        <div className={styles.statBar}>
          {[
            { num: "15+", label: "Years of Experience" },
            { num: "500+", label: "Events Completed" },
            { num: "10K+", label: "Happy Guests" },
            { num: "4.9★", label: "Average Rating" },
          ].map((s, i) => (
            <motion.div
              key={i}
              className={styles.statBarItem}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className={styles.statBarNum}>{s.num}</span>
              <span className={styles.statBarLabel}>{s.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
