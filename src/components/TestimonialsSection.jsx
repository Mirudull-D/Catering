"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TestimonialsSection.module.css';

const videoTestimonials = [
  { id: 1, title: 'A Memorable Wedding', name: 'Priya & Karthik', thumb: '/gallery/wedding_catering.png' },
  { id: 2, title: 'Corporate Excellence', name: 'Tech Mahindra Chennai', thumb: '/gallery/corporate_catering.png' },
  { id: 3, title: 'Delightful Desserts', name: 'Swetha R.', thumb: '/gallery/dessert_platter_1785684210041.png' },
  { id: 4, title: 'Live Counter Magic', name: 'Ravi Family Event', thumb: '/gallery/live_counter_1785684260521.png' },
  { id: 5, title: 'Traditional Sadhya', name: 'Murugan Wedding', thumb: '/gallery/south_indian_meals_1785684185063.png' },
  { id: 6, title: 'Flawless Execution', name: 'Suresh Silver Jubilee', thumb: '/gallery/buffet_setup_1785684198318.png' },
];

const initialReviews = [
  { id: 1, name: 'Ananya S.', event: 'Wedding Sadhya', text: 'The food was absolutely divine! Every guest complimented the traditional sadhya. The service was impeccable.', rating: 5 },
  { id: 2, name: 'Rahul M.', event: 'Corporate Banquet', text: 'Professional, punctual, and delicious. They handled our 500-person conference with ease. Highly recommended.', rating: 5 },
  { id: 3, name: 'Kavita R.', event: 'Birthday Party', text: 'The live dosa counter was a huge hit. Great taste and very hygienic setup. Would book again!', rating: 5 },
  { id: 4, name: 'Vikram K.', event: 'Silver Jubilee', text: 'They made our silver jubilee unforgettable. The dessert platter was completely out of this world!', rating: 5 },
  { id: 5, name: 'Priya K.', event: 'Engagement', text: 'Excellent coordination, polite staff, and warm, delicious traditional food. Highly recommended!', rating: 5 },
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
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', event: '', text: '', rating: 5 });

  const duplicated = [...reviews, ...reviews];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    setReviews(prev => [{ ...formData, id: Date.now() }, ...prev]);
    setFormData({ name: '', event: '', text: '', rating: 5 });
    setShowForm(false);
  };

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>

        {/* ===== Video Testimonials ===== */}
        <div className={styles.videoSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.preTitle}>REAL STORIES</span>
              <h2 className={styles.sectionTitle}>Video Testimonials</h2>
            </div>
          </div>
          <div className={styles.videoGrid}>
            {videoTestimonials.map((v, i) => (
              <motion.div
                key={v.id}
                className={styles.reelCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className={styles.reelThumb}>
                  <img src={v.thumb} alt={v.title} loading="lazy" />
                  <div className={styles.reelOverlay}>
                    <div className={styles.playBtn}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className={styles.reelMeta}>
                    <p className={styles.reelTitle}>{v.title}</p>
                    <p className={styles.reelName}>{v.name}</p>
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
              <span className={styles.preTitle}>WHAT THEY SAY</span>
              <h2 className={styles.sectionTitle}>Customer Reviews</h2>
            </div>
            <button className={styles.addReviewBtn} onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel' : '+ Write a Review'}
            </button>
          </div>

          {/* Add Review Form */}
          {showForm && (
            <motion.form
              className={styles.reviewForm}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleSubmit}
            >
              <div className={styles.formRow}>
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
              </div>
              <div className={styles.formGroup}>
                <label>Your Review *</label>
                <textarea
                  placeholder="Share your experience..."
                  rows={3}
                  value={formData.text}
                  onChange={e => setFormData(p => ({ ...p, text: e.target.value }))}
                  required
                  className={styles.textarea}
                />
              </div>
              <div className={styles.formBottom}>
                <div className={styles.ratingGroup}>
                  <label>Rating</label>
                  <StarRating value={formData.rating} onChange={r => setFormData(p => ({ ...p, rating: r }))} />
                </div>
                <button type="submit" className={styles.submitBtn}>Submit Review</button>
              </div>
            </motion.form>
          )}

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
    </section>
  );
}
