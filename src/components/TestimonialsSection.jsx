"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getGalleryImages, getCustomerReviews, saveCustomerReview } from '../lib/supabase';
import styles from './TestimonialsSection.module.css';

const defaultVideoTestimonials = [
  { id: 'default-1', title: 'A Memorable Wedding', thumb: '/gallery/wedding_catering.png' },
  { id: 'default-2', title: 'Corporate Excellence', thumb: '/gallery/corporate_catering.png' },
  { id: 'default-3', title: 'Delightful Desserts', thumb: '/gallery/dessert_platter_1785684210041.png' },
  { id: 'default-4', title: 'Live Counter Magic', thumb: '/gallery/live_counter_1785684260521.png' },
  { id: 'default-5', title: 'Traditional Sadhya', thumb: '/gallery/south_indian_meals_1785684185063.png' },
  { id: 'default-6', title: 'Flawless Execution', thumb: '/gallery/buffet_setup_1785684198318.png' },
];

function StarRating({ value, onChange }) {
  return (
    <div className={styles.starRating}>
      {[1,2,3,4,5].map(star => (
        <button
          key={star}
          type="button"
          className={`${styles.star} ${star <= value ? styles.starActive : ''}`}
          onClick={() => onChange(star)}
        >★</button>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([]);
  const [videos, setVideos] = useState(defaultVideoTestimonials);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', event: '', text: '', rating: 5 });

  useEffect(() => {
    async function loadData() {
      const allData = await getGalleryImages();
      const customVideos = (allData || []).filter(item => item.category === 'Video');
      if (customVideos.length > 0) {
        setVideos(customVideos);
      }

      const revData = await getCustomerReviews();
      setReviews(revData || []);
    }
    loadData();
  }, []);

  const duplicated = [...reviews, ...reviews];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    const saved = await saveCustomerReview(formData);
    setReviews(prev => [saved, ...prev]);
    setFormData({ name: '', event: '', text: '', rating: 5 });
    setShowForm(false);
    alert('Thank you! Your review has been published.');
  };

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>

        {/* ===== Video Testimonials ===== */}
        <div className={styles.videoSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.preTitle}>{t('realStoriesTag')}</span>
              <h2 className={styles.sectionTitle}>{t('videoShowcaseTitle')}</h2>
            </div>
          </div>
          <div className={styles.videoGrid}>
            {videos.map((v, i) => (
              <motion.div
                key={v.id || i}
                className={styles.reelCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onClick={() => setSelectedVideo(v)}
              >
                <div className={styles.reelThumb}>
                  {v.src && (v.src.endsWith('.mp4') || v.src.endsWith('.webm') || v.src.endsWith('.mov') || v.src.startsWith('data:video')) ? (
                    <video src={v.src} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <img src={v.thumb || v.src} alt={v.title || 'Video Showcase'} loading="lazy" />
                  )}
                  <div className={styles.reelOverlay}>
                    <div className={styles.playBtn}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Customer Reviews ===== */}
        <div className={styles.reviewSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.preTitle}>{t('socialProofTag')}</span>
              <h2 className={styles.sectionTitle}>{t('testimonialsTitle')}</h2>
            </div>
            <button className={styles.addReviewBtn} onClick={() => setShowForm(true)}>
              + {t('writeReview')}
            </button>
          </div>

          {/* Scrolling carousel */}
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer}>
              <div className={styles.track}>
                {duplicated.map((item, index) => (
                  <div key={`${item.id}-${index}`} className={styles.testimonialCard}>
                    <div className={styles.cardStars}>
                      {Array.from({ length: item.rating }).map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className={styles.testimonialText}>"{item.text}"</p>
                    <div className={styles.authorInfo}>
                      <div className={styles.avatar}>{item.name.charAt(0)}</div>
                      <div>
                        <h4 className={styles.authorName}>{item.name}</h4>
                        <p className={styles.authorEvent}>{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ===== Write Review Modal ===== */}
      <AnimatePresence>
        {showForm && (
          <div className={styles.modalOverlay} onClick={() => setShowForm(false)}>
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setShowForm(false)}>✕</button>
              
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{t('writeReview')}</h2>
                <p className={styles.modalDesc}>Share your experience with Sri Sankara Catering Services.</p>
              </div>
              
              <form className={styles.reviewModalForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Kavitha R."
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    required
                    className={styles.input}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Event Type</label>
                  <input
                    type="text"
                    placeholder="e.g. Wedding, Birthday"
                    value={formData.event}
                    onChange={e => setFormData(p => ({ ...p, event: e.target.value }))}
                    className={styles.input}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Your Review *</label>
                  <textarea
                    placeholder="Share your experience..."
                    rows={4}
                    value={formData.text}
                    onChange={e => setFormData(p => ({ ...p, text: e.target.value }))}
                    required
                    className={styles.textarea}
                  />
                </div>
                
                <div className={styles.ratingGroup}>
                  <label>Rating</label>
                  <StarRating value={formData.rating} onChange={r => setFormData(p => ({ ...p, rating: r }))} />
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  Submit Review
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ===== Full-Screen Big Screen Video Lightbox ===== */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className={styles.videoModalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <button className={styles.closeVideoBtn} onClick={() => setSelectedVideo(null)}>
              ✕
            </button>

            <motion.div
              className={styles.videoModalCard}
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.videoContainer}>
                {selectedVideo.src && (selectedVideo.src.endsWith('.mp4') || selectedVideo.src.endsWith('.webm') || selectedVideo.src.endsWith('.mov') || selectedVideo.src.startsWith('data:video')) ? (
                  <video 
                    src={selectedVideo.src} 
                    controls 
                    autoPlay 
                    playsInline
                    className={styles.fullMedia} 
                  />
                ) : (
                  <img 
                    src={selectedVideo.thumb || selectedVideo.src} 
                    alt={selectedVideo.title || 'Video Showcase'} 
                    className={styles.fullMedia} 
                  />
                )}
              </div>

              <div className={styles.videoMetaBar}>
                <div>
                  <span className={styles.videoBadge}>Catering Reel Highlight</span>
                  <h3 className={styles.videoTitle}>{selectedVideo.title || 'Sri Sankara Catering Event'}</h3>
                </div>
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840874966'}?text=${encodeURIComponent(`Hi, I saw the video "${selectedVideo.title || 'Catering Highlight'}" on your website and would like to inquire about booking!`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.videoBookBtn}
                >
                  Book Similar Event
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
