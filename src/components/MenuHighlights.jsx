"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './MenuHighlights.module.css';

const menuData = {
  veg: [
    { id: 'v1', icon: '🍲', name: 'Paneer Butter Masala', desc: 'Rich and creamy curry made with paneer, spices, onions, tomatoes, and butter.' },
    { id: 'v2', icon: '🍚', name: 'Vegetable Biryani', desc: 'Aromatic basmati rice cooked with mixed vegetables and traditional spices.' },
    { id: 'v3', icon: '🥘', name: 'Malai Kofta', desc: 'Fried dumpling balls in a creamy, sweet and mildly spiced curry.' },
  ],
  nonveg: [
    { id: 'nv1', icon: '🍗', name: 'Chettinad Chicken', desc: 'Classic South Indian chicken curry made with fresh ground spices.' },
    { id: 'nv2', icon: '🥩', name: 'Mutton Rogan Josh', desc: 'Aromatic lamb dish of Persian origin, which is one of the signature recipes of Kashmiri cuisine.' },
    { id: 'nv3', icon: '🐟', name: 'Fish Curry', desc: 'Tangy and spicy fish curry made in traditional style with tamarind and coconut.' },
  ],
  desserts: [
    { id: 'd1', icon: '🧆', name: 'Gulab Jamun', desc: 'Fried dough balls soaked in a sweet, sticky sugar syrup.' },
    { id: 'd2', icon: '🥣', name: 'Rasmalai', desc: 'Flattened balls of chhena soaked in malai flavored with cardamom.' },
    { id: 'd3', icon: '🥥', name: 'Elaneer Payasam', desc: 'Refreshing South Indian dessert made with tender coconut.' },
  ],
  live: [
    { id: 'l1', icon: '🥞', name: 'Live Dosa Counter', desc: 'Fresh dosas made to order: Masala, Onion, Paneer, and more.' },
    { id: 'l2', icon: '🌮', name: 'Chaat Station', desc: 'Pani Puri, Bhel Puri, and Aloo Tikki prepared fresh.' },
    { id: 'l3', icon: '🥣', name: 'Appam & Stew', desc: 'Soft appams served with warm vegetable or meat stew.' },
  ]
};

export default function MenuHighlights() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('veg');

  const tabs = [
    { id: 'veg', label: t('tabVeg') },
    { id: 'nonveg', label: t('tabNonVeg') },
    { id: 'desserts', label: t('tabDesserts') },
    { id: 'live', label: t('tabLive') },
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
