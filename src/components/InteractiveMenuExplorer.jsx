"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import styles from './InteractiveMenuExplorer.module.css';

const SERVING_STEPS = [
  {
    id: 1,
    title: 'Top Left — Appetizers & Digestives',
    subtitle: 'The Foundation of Flavor',
    icon: '🍋',
    dishes: [
      { name: 'Uppu (Salt)', icon: '🧂', desc: 'Placed at the extreme top left corner to begin.' },
      { name: 'Inji Puli', icon: '🫚', desc: 'Ginger-tamarind relish to awaken digestive enzymes.' },
      { name: 'Mango Pickle', icon: '🥭', desc: 'Spicy sun-dried mango pickle for zest.' },
      { name: 'Banana Chips & Sarkaravaratti', icon: '🍌', desc: 'Crispy sweet jaggery-coated banana chips.' }
    ],
    heritageTip: 'In South Indian Sadhya tradition, bitter & sour items are placed at the top left to balance digestion before the main feast.'
  },
  {
    id: 2,
    title: 'Top Right — Crisps & Side Dishes',
    subtitle: 'Vegetable Delicacies & Crunch',
    icon: '🥗',
    dishes: [
      { name: 'Avial', icon: '🥥', desc: 'Mixed vegetables cooked in coconut & curd.' },
      { name: 'Thoran / Poriyal', icon: '🥦', desc: 'Finely chopped vegetables tossed with grated coconut.' },
      { name: 'Olan', icon: '🎃', desc: 'White gourd & red beans in fresh coconut milk.' },
      { name: 'Guruvayur Pappadam', icon: '🍘', desc: 'Puffed crispy papad placed beside the meal.' }
    ],
    heritageTip: 'Vegetables are cut into distinct shapes to signify harmony between all elements of nature.'
  },
  {
    id: 3,
    title: 'Bottom Center — The Main Course Flow',
    subtitle: 'Rice & Sequential Gravies',
    icon: '🍲',
    dishes: [
      { name: 'Parippu & Pure Ghee', icon: '🧈', desc: 'First course: Creamy moong dal topped with melted ghee.' },
      { name: 'Arachavitta Sambar', icon: '🍲', desc: 'Second course: Fresh roasted spice Sambar served hot over rice.' },
      { name: 'Pepper Garlic Rasam', icon: '🍵', desc: 'Third course: Tangy soup infused with black pepper & cumin.' },
      { name: 'Fresh Curd / Moru', icon: '🥛', desc: 'Final savory course: Chilled tempered buttermilk to soothe the palate.' }
    ],
    heritageTip: 'Rice is served in courses — starting with mild Parippu, progressing to rich Sambar, tangy Rasam, and ending with cooling Curd.'
  },
  {
    id: 4,
    title: 'The Sweet Finale — Royal Payasams',
    subtitle: 'Grand Celebration Desserts',
    icon: '🍯',
    dishes: [
      { name: 'Elaneer Payasam', icon: '🥥', desc: 'Tender coconut pudding made with pure milk.' },
      { name: 'Ada Pradhaman', icon: '🍯', desc: 'Steamed rice flakes cooked in jaggery & coconut milk.' },
      { name: 'Pazham (Ripe Banana)', icon: '🍌', desc: 'Eaten crushed into Payasam with Pappadam for ultimate crunch.' },
      { name: 'Degree Filter Coffee', icon: '☕', desc: 'Authentic frothy South Indian filter coffee served in brass dabba.' }
    ],
    heritageTip: 'Folding the banana leaf inwards towards yourself after Payasam signifies complete satisfaction with the meal!'
  }
];

export default function InteractiveMenuExplorer() {
  const { openBookingModal } = useBooking();
  const [activeStep, setActiveStep] = useState(SERVING_STEPS[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.preTitle}>🌿 TRADITIONAL LEAF DINING HERITAGE</span>
          <h2 className={styles.title}>The Art of Banana Leaf Serving</h2>
          <p className={styles.subtitle}>
            Explore the authentic step-by-step serving sequence of a traditional South Indian Sadhya. Tap each step to discover dish placements and ancient dining lore!
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className={styles.stepTabs}>
          {SERVING_STEPS.map((step) => (
            <button
              key={step.id}
              className={`${styles.tabBtn} ${activeStep.id === step.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveStep(step)}
            >
              <span className={styles.stepNum}>0{step.id}</span>
              <span className={styles.stepIcon}>{step.icon}</span>
              <span className={styles.stepTitle}>{step.title.split('—')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className={styles.showcaseCard}
          >
            <div className={styles.showcaseHeader}>
              <div>
                <span className={styles.stepBadge}>STEP 0{activeStep.id} OF 04</span>
                <h3 className={styles.cardMainTitle}>{activeStep.title}</h3>
                <p className={styles.cardSubtitle}>{activeStep.subtitle}</p>
              </div>
              <button className={styles.bookMenuCta} onClick={openBookingModal}>
                Book This Sadhya Experience →
              </button>
            </div>

            {/* Dish Placement Grid */}
            <div className={styles.dishesGrid}>
              {activeStep.dishes.map((dish, i) => (
                <div key={i} className={styles.dishCard}>
                  <div className={styles.dishHeader}>
                    <span className={styles.dishIcon}>{dish.icon}</span>
                    <span className={styles.dishName}>{dish.name}</span>
                  </div>
                  <p className={styles.dishDesc}>{dish.desc}</p>
                </div>
              ))}
            </div>

            {/* Heritage Lore Box */}
            <div className={styles.loreBox}>
              <span className={styles.loreIcon}>📜</span>
              <div>
                <span className={styles.loreTitle}>ANCIENT HERITAGE WISDOM</span>
                <p className={styles.loreText}>{activeStep.heritageTip}</p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
