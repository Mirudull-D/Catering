"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840874966';
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 98408 74966';

const ServiceModal = ({ isOpen, onClose, service, onOpenBooking, t }) => {
  if (!isOpen || !service) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleBookNow = () => {
    onClose();
    onOpenBooking(service);
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
              <h2 className={styles.printTitle}>Sri Sankara Catering Services — Official Brochure</h2>
              <p>Phone: {PHONE_NUMBER} | Location: Kattankulathur, Tamil Nadu</p>
            </div>
            
            <h2 className={styles.modalTitle}>{service.title}</h2>
            <p className={styles.modalDesc}>{service.desc}</p>
            
            <div className={styles.modalDetails}>
              <h3>What&apos;s Included in {service.title}:</h3>
              <ul>
                <li>Customized Authentic Menu Planning</li>
                <li>Traditional & Modern Presentation</li>
                <li>Professional Uniformed Service Staff</li>
                <li>Premium Cutlery, Dishes & Hygiene Setup</li>
                <li>On-site Live Kitchen & Management</li>
              </ul>
            </div>
            
            <div className={styles.printFooter}>
              <p>For Instant Booking & Inquiries: {PHONE_NUMBER} | WhatsApp: +{WHATSAPP_NUMBER}</p>
            </div>
          </div>
          
          <div className={styles.modalActions}>
            <button className={styles.bookNowActionBtn} onClick={handleBookNow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Book Now
            </button>
            <button className={styles.downloadBtn} onClick={handlePrint}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Brochure PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const BookModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', remarks: '' });

  if (!isOpen || !service) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Sri Sankara Catering, I want to book the *${service.title}* package.\n\n*Name:* ${formData.name}\n*Contact:* ${formData.phone}\n*Date:* ${formData.date}\n*Remarks:* ${formData.remarks}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
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
          <h2 className={styles.modalTitle}>Book {service.title}</h2>
          <p className={styles.modalDesc}>Please fill in your details and we will connect with you on WhatsApp to confirm your booking.</p>
          
          <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              className={styles.inputField} 
            />
            <input 
              type="tel" 
              placeholder="Contact Number" 
              required 
              value={formData.phone} 
              onChange={e => setFormData({...formData, phone: e.target.value})} 
              className={styles.inputField} 
            />
            <input 
              type="date" 
              required 
              value={formData.date} 
              onChange={e => setFormData({...formData, date: e.target.value})} 
              className={styles.inputField} 
            />
            <textarea 
              placeholder="Any remarks or special requests?" 
              rows="3" 
              value={formData.remarks} 
              onChange={e => setFormData({...formData, remarks: e.target.value})} 
              className={styles.inputField} 
            />
            <button type="submit" className={styles.whatsappSubmitBtn}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.78 0-3.522-.477-5.048-1.38l-.362-.215-3.75.983.999-3.656-.236-.375C2.686 15.602 2.14 13.67 2.14 11.642c0-5.32 4.328-9.648 9.648-9.648 5.32 0 9.648 4.328 9.648 9.648 0 5.32-4.328 9.648-9.648 9.648m0-21.055C5.452.788.077 6.163.077 12.788c0 2.114.552 4.179 1.603 5.999L0 24.876l6.262-1.642c1.756.957 3.742 1.463 5.79 1.463 6.625 0 12-5.375 12-12s-5.375-12-12-12"/></svg>
              Send on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function ServicesSection() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBookService, setSelectedBookService] = useState(null);

  const handleGlobalBrochurePrint = () => {
    window.print();
  };

  const services = [
    { id: 1, title: t('service1'), desc: t('service1Desc'), image: '/gallery/wedding_catering.png' },
    { id: 2, title: t('service2'), desc: t('service2Desc'), image: '/gallery/corporate_catering.png' },
    { id: 3, title: t('service3'), desc: t('service3Desc'), image: '/gallery/dessert_platter_1785684210041.png' },
    { id: 4, title: t('service4'), desc: t('service4Desc'), image: '/gallery/live_counter_1785684260521.png' },
    { id: 5, title: t('service5'), desc: t('service5Desc'), image: '/gallery/buffet_setup_1785684198318.png' },
    { id: 6, title: t('service6'), desc: t('service6Desc'), image: '/gallery/south_indian_meals_1785684185063.png' },
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <span className={styles.preTitle}>CRAFTED FOR YOU</span>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('servicesTitle')}
          </motion.h2>
          <p className={styles.sectionDesc}>{t('servicesSub')}</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ServiceCard 
                service={service}
                onOpenDetails={() => setSelectedService(service)}
                onOpenBooking={() => setSelectedBookService(service)}
                onDownload={handleGlobalBrochurePrint}
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
        onOpenBooking={(s) => setSelectedBookService(s)}
        t={t}
      />
      <BookModal 
        isOpen={!!selectedBookService} 
        onClose={() => setSelectedBookService(null)} 
        service={selectedBookService} 
      />
    </section>
  );
}
