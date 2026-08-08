"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { getGalleryImages } from '../../lib/supabase';
import styles from './GalleryPage.module.css';

export default function FullGalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function loadData() {
      const data = await getGalleryImages();
      setImages(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const categories = ['All', 'Sadhya', 'Buffet', 'Live Station', 'Desserts', 'Wedding', 'Corporate'];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => (img.category || 'General') === activeFilter);

  return (
    <div className={styles.pageWrap}>

      {/* Main Section under Header */}
      <main className={styles.mainContent}>

        {/* Back Link & Title */}
        <div className={styles.topBarRow}>
          <Link href="/" className={styles.backBtn}>
            ← Back to Home
          </Link>
          <span className={styles.itemCountBadge}>{images.length} Photos</span>
        </div>

        <div className={styles.titleArea}>
          <span className={styles.preTitle}>OUR COMPLETE PORTFOLIO</span>
          <h1 className={styles.mainHeading}>Full Gallery</h1>
          <p className={styles.subHeading}>Explore all our signature dishes, sadhya sequence spreads, live counters, and catering setups.</p>
        </div>

        {/* Category Filters */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Phone-Sized Cards Grid */}
        {loading ? (
          <p className={styles.loadingText}>Loading full gallery...</p>
        ) : (
          <motion.div className={styles.grid} layout>
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id || index}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: (index % 6) * 0.04 }}
                  className={styles.cardItem}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img.src} alt={img.title || 'Gallery image'} className={styles.cardImg} loading="lazy" />
                  
                  {/* Clean Hover Overlay with Zoom Icon */}
                  <div className={styles.overlay}>
                    <span className={styles.expandIcon}>🔍</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.closeBtn}>✕</button>
            <motion.div 
              className={styles.lightboxCard}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title || 'Gallery Image'} className={styles.lightboxImg} />
              {selectedImage.title && (
                <div className={styles.lightboxMeta}>
                  <span className={styles.lightboxCat}>{selectedImage.category || 'Feast'}</span>
                  <h3 className={styles.lightboxTitle}>{selectedImage.title}</h3>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
}
