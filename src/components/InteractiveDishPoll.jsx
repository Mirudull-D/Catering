"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './InteractiveDishPoll.module.css';

const INITIAL_DISHES = [
  { id: 'coffee', name: 'Degree Filter Coffee', votes: 3120, icon: '☕', category: 'Beverage' },
  { id: 'biryani', name: 'Seeraga Samba Biryani', votes: 2450, icon: '🍚', category: 'Main Feast' },
  { id: 'dosa', name: 'Live Ghee Podi Dosa', votes: 1980, icon: '🍲', category: 'Live Counter' },
  { id: 'payasam', name: 'Elaneer Payasam', votes: 1640, icon: '🍯', category: 'Dessert' },
];

export default function InteractiveDishPoll() {
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
          <span className={styles.preTitle}>❤️ LIVE GUEST FAVORITES</span>
          <h2 className={styles.title}>Vote For Your Must-Have Dish</h2>
          <p className={styles.subtitle}>
            Tap heart to vote for the signature dishes you want featured at your next grand feast!
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
                  <span className={styles.dishCategory}>{dish.category}</span>
                </div>

                <h3 className={styles.dishName}>{dish.name}</h3>

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
                  <span>{isLiked ? '❤️ Voted!' : '🤍 Tap to Vote'}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
