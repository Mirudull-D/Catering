"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './GallerySection.module.css';

const images = [
  { id: 1, src: '/gallery/south_indian_meals_1785684185063.png', alt: 'South Indian Meals' },
  { id: 2, src: '/gallery/buffet_setup_1785684198318.png', alt: 'Buffet Setup' },
  { id: 3, src: '/gallery/dessert_platter_1785684210041.png', alt: 'Dessert Platter' },
  { id: 4, src: '/gallery/live_counter_1785684260521.png', alt: 'Live Counter' },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('galleryTitle')}
        </motion.h2>

        <div className={styles.masonryGrid}>
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              className={styles.gridItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className={styles.image} />
              <div className={styles.overlay}>
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.closeLightbox}>✕</button>
            <motion.img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className={styles.lightboxImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
