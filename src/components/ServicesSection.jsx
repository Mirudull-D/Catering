"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const ServiceModal = ({ isOpen, onClose, service, t }) => {
  if (!isOpen || !service) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className={styles.modalOverlay} onClick={onClose}>
        <motion.div 
          className={styles.modalContent}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
          
          <div className={styles.printableArea}>
            <div className={styles.printHeader}>
              <h2 className={styles.printTitle}>Sri Sankara Catering Services</h2>
              <p>Premium Event Catering</p>
            </div>
            
            <div className={styles.modalIcon}>{service.icon}</div>
            <h2 className={styles.modalTitle}>{service.title}</h2>
            <p className={styles.modalDesc}>{service.desc}</p>
            
            <div className={styles.modalDetails}>
              <h3>What's Included:</h3>
              <ul>
                <li>Customized Menu Planning</li>
                <li>Professional Service Staff</li>
                <li>Premium Cutlery & Setup</li>
                <li>On-site Management</li>
              </ul>
            </div>
            
            <div className={styles.printFooter}>
              <p>Contact us to book: +91 98765 43210 | info@srisankaracatering.com</p>
            </div>
          </div>
          
          <div className={styles.modalActions}>
            <button className={`${styles.downloadBtn} shimmer-btn`} onClick={handlePrint}>
              {t('downloadBrochure')} (PDF)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function ServicesSection() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, icon: '💍', title: t('service1'), desc: t('service1Desc'), image: '/gallery/wedding_catering.png' },
    { id: 2, icon: '🏢', title: t('service2'), desc: t('service2Desc'), image: '/gallery/corporate_catering.png' },
    { id: 3, icon: '🎉', title: t('service3'), desc: t('service3Desc'), image: '/gallery/dessert_platter_1785684210041.png' },
    { id: 4, icon: '🍳', title: t('service4'), desc: t('service4Desc'), image: '/gallery/live_counter_1785684260521.png' },
    { id: 5, icon: '🍲', title: t('service5'), desc: t('service5Desc'), image: '/gallery/buffet_setup_1785684198318.png' },
    { id: 6, icon: '🌿', title: t('service6'), desc: t('service6Desc'), image: '/gallery/south_indian_meals_1785684185063.png' },
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('servicesTitle')}
        </motion.h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              style={{ display: 'contents' }} /* support native swipe row but allow Framer Motion container wrapper */
            >
              <ServiceCard 
                service={service}
                onOpenDetails={() => setSelectedService(service)}
                t={t}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
        t={t}
      />
    </section>
  );
}
