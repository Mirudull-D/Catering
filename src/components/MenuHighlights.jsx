"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './MenuHighlights.module.css';

const menuData = {
  tiffin: [
    { id: 't1', icon: '🍲', name: 'Ghee Pongal & Medhu Vadai', desc: 'Classic South Indian breakfast staple, served with fresh coconut chutney and sambar.' },
    { id: 't2', icon: '🥘', name: 'Kasi Halwa / Asoka Halwa', desc: 'A rich and traditional sweet, roasted in pure ghee and cashews.' },
    { id: 't3', icon: '☕', name: 'Degree Filter Coffee', desc: 'Authentic filter coffee to kickstart your morning celebrations.' },
  ],
  lunch: [
    { id: 'l1', icon: '🍛', name: 'Traditional Sadhya', desc: 'A grand banana leaf meal including Sambar, Mor Kuzhambu, Avial, and Kootu.' },
    { id: 'l2', icon: '🥣', name: 'Paal / Paruppu Payasam', desc: 'Divine traditional dessert to begin the grand wedding feast on a sweet note.' },
    { id: 'l3', icon: '🥗', name: 'Potato Kaara Kari & Beans Usili', desc: 'Signature Brahmin-style vegetable accompaniments cooked with aromatic spices.' },
  ],
  dinner: [
    { id: 'd1', icon: '🍲', name: 'Paneer Masala & Breads', desc: 'Rich and creamy delicacy served with soft Chappathi, Naan or Parotta.' },
    { id: 'd2', icon: '🍚', name: 'Veg Pulao / Briyani', desc: 'Flavorful and aromatic rice dishes cooked with premium spices and vegetables.' },
    { id: 'd3', icon: '🥟', name: 'Malai Sandwich & Sweets', desc: 'Exquisite Bengali and traditional sweets like Rasamalai for a grand reception.' },
  ],
  chaat: [
    { id: 'c1', icon: '🌮', name: 'Live Chaat Station', desc: 'Pani Puri, Bhel Puri, and Pav Bhaji prepared fresh and served hot.' },
    { id: 'c2', icon: '🥞', name: 'Live Dosa Counters', desc: 'Hot, crispy dosas (Ghee Roast, Podi, Paneer) served straight from our live counters.' },
    { id: 'c3', icon: '🍧', name: 'Premium Desserts & Ice Creams', desc: 'Fruit salads, Ice creams, and hot Jalebis or Cotton Candy for a perfect finish.' },
  ]
};

export default function MenuHighlights() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('tiffin');

  const tabs = [
    { id: 'tiffin', label: t('tabTiffin') },
    { id: 'lunch', label: t('tabLunch') },
    { id: 'dinner', label: t('tabDinner') },
    { id: 'chaat', label: t('tabChaat') },
  ];

  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>{t('menuTitle')}</h2>
          <p className={styles.sectionDesc}>{t('menuDesc')}</p>
        </motion.div>

        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  className={styles.activeIndicator}
                  layoutId="activeTabIndicator"
                />
              )}
            </button>
          ))}
        </div>

        <div className={styles.menuContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={styles.menuGrid}
            >
              {menuData[activeTab].map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className={styles.menuCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.itemIcon}>{item.icon}</span>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <div className={styles.itemLine}></div>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
