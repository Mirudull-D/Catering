"use client";

import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import styles from './FoodHighlightSection.module.css';

const highlights = [
  {
    emoji: "🍛",
    title: "South Indian Sadhya",
    desc: "Traditional banana leaf meals with 20+ authentic accompaniments. A feast for the soul.",
    tag: "Wedding Special"
  },
  {
    emoji: "🍲",
    title: "Live Counter Station",
    desc: "Interactive live dosa, chaat & dessert counters that become the star of your event.",
    tag: "Most Popular"
  },
  {
    emoji: "🎂",
    title: "Grand Dessert Spreads",
    desc: "Decadent dessert platters crafted fresh — from payasam to fusion sweets.",
    tag: "Party Favourite"
  },
  {
    emoji: "🥘",
    title: "Multi-Cuisine Buffet",
    desc: "Full-service North Indian, Continental & Chinese buffet setups for every taste.",
    tag: "Corporate Ready"
  },
];

export default function FoodHighlightSection() {
  const { openBookingModal } = useBooking();

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.preTitle}>FOR THE FOOD</span>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Every dish tells<br />a story.
            </motion.h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              From intimate family celebrations to grand weddings — we bring authentic 
              flavours that your guests will talk about for years.
            </p>
            <button className={styles.ctaBtn} onClick={openBookingModal}>
              Plan Your Menu →
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.cardEmoji}>{item.emoji}</div>
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{item.tag}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
              <div className={styles.cardArrow}>→</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bannerImages}>
            <img src="/gallery/south_indian_meals_1785684185063.png" alt="South Indian" />
            <img src="/gallery/dessert_platter_1785684210041.png" alt="Desserts" />
            <img src="/gallery/live_counter_1785684260521.png" alt="Live Counter" />
          </div>
          <div className={styles.bannerText}>
            <h3>Custom menus crafted just for your event.</h3>
            <p>Talk to our chef — personalise every dish for your occasion.</p>
          </div>
          <button className={styles.bannerBtn} onClick={openBookingModal}>
            Get a Quote
          </button>
        </motion.div>

      </div>
    </section>
  );
}
