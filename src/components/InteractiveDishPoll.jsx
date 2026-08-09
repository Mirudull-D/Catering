"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import styles from './InteractiveDishPoll.module.css';

const INITIAL_DISHES = [
  { id: 'coffee', name: { en: 'Degree Filter Coffee', ta: 'டிகிரி பில்டர் காபி' }, votes: 3120, icon: '☕', category: { en: 'Beverage', ta: 'பானம்' } },
  { id: 'biryani', name: { en: 'Seeraga Samba Biryani', ta: 'சீரக சம்பா பிரியாணி' }, votes: 2450, icon: '🍚', category: { en: 'Main Feast', ta: 'பிரதான உணவு' } },
  { id: 'dosa', name: { en: 'Live Ghee Podi Dosa', ta: 'நெய் பொடி தோசை' }, votes: 1980, icon: '🍲', category: { en: 'Live Counter', ta: 'லைவ் கவுண்டர்' } },
  { id: 'payasam', name: { en: 'Elaneer Payasam', ta: 'இளநீர் பாயாசம்' }, votes: 1640, icon: '🍯', category: { en: 'Dessert', ta: 'இனிப்பு' } },
];

export default function InteractiveDishPoll() {
  const { lang, t } = useLanguage();
  const [dishes, setDishes] = useState(INITIAL_DISHES);
  const [userVoted, setUserVoted] = useState({});

  const handleVote = (id) => {
    setDishes(prevDishes =>
      prevDishes.map(d => {
        if (d.id === id) {
          const isVoted = userVoted[id];
          return { ...d, votes: isVoted ? d.votes - 1 : d.votes + 1 };
        }
        return d;
      })
    );
    setUserVoted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalVotes = dishes.reduce((acc, d) => acc + d.votes, 0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.preTitle}>{t('pollTag')}</span>
          <h2 className={styles.title}>{t('pollTitle')}</h2>
          <p className={styles.subtitle}>
            {t('pollSub')}
          </p>
        </div>

        {/* Dish Vote Cards Grid */}
        <div className={styles.voteGrid}>
          {dishes.map((dish) => {
            const percentage = Math.round((dish.votes / totalVotes) * 100);
            const isLiked = !!userVoted[dish.id];

            return (
              <motion.div
                key={dish.id}
                whileHover={{ y: -6 }}
                className={styles.voteCard}
              >
                <div className={styles.cardTop}>
                  <span className={styles.dishIcon}>{dish.icon}</span>
                  <span className={styles.dishCategory}>{dish.category[lang] || dish.category.en}</span>
                </div>

                <h3 className={styles.dishName}>{dish.name[lang] || dish.name.en}</h3>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                  <div className={styles.progressHeader}>
                    <span className={styles.voteCount}>{dish.votes.toLocaleString()} Votes</span>
                    <span className={styles.votePercent}>{percentage}%</span>
                  </div>
                  <div className={styles.track}>
                    <motion.div
                      className={styles.fill}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Like Button */}
                <button
                  className={`${styles.likeBtn} ${isLiked ? styles.likeBtnActive : ''}`}
                  onClick={() => handleVote(dish.id)}
                >
                  <span>{isLiked ? `❤️ ${t('voted')}` : `🤍 ${t('tapToVote')}`}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
