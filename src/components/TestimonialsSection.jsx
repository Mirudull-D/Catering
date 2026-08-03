"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  { id: 1, name: 'Ananya S.', event: 'Wedding Sadhya', text: 'The food was absolutely divine! Every guest complimented the traditional sadhya. The service was impeccable.', rating: 5 },
  { id: 2, name: 'Rahul M.', event: 'Corporate Banquet', text: 'Professional, punctual, and delicious. They handled our 500-person conference with ease. Highly recommended.', rating: 5 },
  { id: 3, name: 'Kavita R.', event: 'Birthday Party', text: 'The live dosa counter was a huge hit at my son’s first birthday. Great taste and very hygienic setup.', rating: 5 },
  { id: 4, name: 'Vikram K.', event: 'Silver Jubilee', text: 'Sri Sankara Catering made our silver jubilee so special. The dessert platter was out of this world!', rating: 5 },
  { id: 5, name: 'Priya K.', event: 'Engagement Function', text: 'Excellent coordination, polite staff, and warm, delicious traditional food. Highly recommended!', rating: 5 },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  
  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tagline}>{t('socialProofTag') || 'Social Proof'}</span>
          <h2 className={styles.sectionTitle}>{t('testimonialsTitle')}</h2>
          <p className={styles.summaryText}>{t('testimonialSummary')}</p>
          <button className={styles.writeReviewBtn}>
            <span>★</span> {t('writeReview') || 'Write a Review'}
          </button>
        </div>

        <motion.div 
          className={styles.carouselWrapper}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.carouselContainer}>
            <div className={styles.track}>
              {duplicatedTestimonials.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={styles.testimonialCard}
                >
                  <div>
                    <div className={styles.cardStars}>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className={styles.testimonialText}>"{item.text}"</p>
                  </div>
                  
                  <div className={styles.authorInfo}>
                    <div className={styles.avatar}>
                      {item.name.charAt(0)}
                    </div>
                    <div className={styles.authorDetails}>
                      <h4 className={styles.authorName}>{item.name}</h4>
                      <p className={styles.authorEvent}>{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
