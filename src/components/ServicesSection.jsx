"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
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
    { id: 1, icon: '💍', title: t('service1'), desc: t('service1Desc') },
    { id: 2, icon: '🏢', title: t('service2'), desc: t('service2Desc') },
    { id: 3, icon: '🎉', title: t('service3'), desc: t('service3Desc') },
    { id: 4, icon: '🍳', title: t('service4'), desc: t('service4Desc') },
    { id: 5, icon: '🍲', title: t('service5'), desc: t('service5Desc') },
    { id: 6, icon: '🌿', title: t('service6'), desc: t('service6Desc') },
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('servicesTitle')}
        </motion.h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <button 
                className={styles.viewBtn}
                onClick={() => setSelectedService(service)}
              >
                {t('viewDetails')} →
              </button>
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
