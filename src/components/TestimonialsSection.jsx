"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  { id: 1, name: 'Ananya S.', event: 'Wedding', text: 'The food was absolutely divine! Every guest complimented the traditional sadhya. The service was impeccable.', rating: 5 },
  { id: 2, name: 'Rahul M.', event: 'Corporate Event', text: 'Professional, punctual, and delicious. They handled our 500-person conference with ease. Highly recommended.', rating: 5 },
  { id: 3, name: 'Kavita R.', event: 'Birthday Party', text: 'The live dosa counter was a huge hit at my son’s first birthday. Great taste and very hygienic setup.', rating: 5 },
  { id: 4, name: 'Vikram K.', event: 'Anniversary', text: 'Sri Sankara Catering made our silver jubilee so special. The dessert platter was out of this world!', rating: 4 },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>{t('testimonialsTitle')}</h2>
          <div className={styles.starsWrapper}>
            {[1,2,3,4,5].map((star, i) => (
              <motion.span 
                key={star} 
                className={styles.starIcon}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                ★
              </motion.span>
            ))}
          </div>
          <p className={styles.summaryText}>{t('testimonialSummary')}</p>
        </motion.div>

        <div className={styles.carouselContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.testimonialCard}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>{testimonials[currentIndex].text}</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.authorName}>{testimonials[currentIndex].name}</h4>
                  <p className={styles.authorEvent}>{testimonials[currentIndex].event}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
