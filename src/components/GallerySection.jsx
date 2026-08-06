"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GallerySection.module.css';

const images = [
  { id: 1, src: '/gallery/south_indian_meals_1785684185063.png', alt: 'South Indian Meals' },
  { id: 2, src: '/gallery/buffet_setup_1785684198318.png', alt: 'Buffet Setup' },
  { id: 3, src: '/gallery/dessert_platter_1785684210041.png', alt: 'Dessert Platter' },
  { id: 4, src: '/gallery/live_counter_1785684260521.png', alt: 'Live Counter' },
  { id: 5, src: '/gallery/wedding_catering.png', alt: 'Wedding Catering' },
  { id: 6, src: '/gallery/corporate_catering.png', alt: 'Corporate Catering' },
  { id: 7, src: '/gallery/south_indian_meals_1785684185063.png', alt: 'Traditional Feast' },
  { id: 8, src: '/gallery/buffet_setup_1785684198318.png', alt: 'Grand Buffet' },
  { id: 9, src: '/gallery/dessert_platter_1785684210041.png', alt: 'Sweet Platters' },
  { id: 10, src: '/gallery/live_counter_1785684260521.png', alt: 'Live Station' },
  { id: 11, src: '/gallery/wedding_catering.png', alt: 'Wedding Setup' },
  { id: 12, src: '/gallery/corporate_catering.png', alt: 'Office Catering' },
  { id: 13, src: '/gallery/south_indian_meals_1785684185063.png', alt: 'Banana Leaf Meals' },
  { id: 14, src: '/gallery/buffet_setup_1785684198318.png', alt: 'Event Buffet' },
  { id: 15, src: '/gallery/dessert_platter_1785684210041.png', alt: 'Dessert Spread' },
  { id: 16, src: '/gallery/live_counter_1785684260521.png', alt: 'Interactive Counter' },
  { id: 17, src: '/gallery/wedding_catering.png', alt: 'Bridal Catering' },
  { id: 18, src: '/gallery/corporate_catering.png', alt: 'Conference Catering' },
  { id: 19, src: '/gallery/south_indian_meals_1785684185063.png', alt: 'Festival Meals' },
  { id: 20, src: '/gallery/buffet_setup_1785684198318.png', alt: 'Premium Setup' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>OUR PORTFOLIO</span>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Gallery
          </motion.h2>
          <p className={styles.sectionDesc}>A glimpse of the moments we've crafted</p>
        </div>

        <div className={styles.grid}>
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              className={styles.gridItem}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 8) * 0.05 }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className={styles.image} />
              <div className={styles.overlay}>
                <span className={styles.expandIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg>
                </span>
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
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
