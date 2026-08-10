"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import styles from './Header.module.css';

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();
  const { openBookingModal } = useBooking();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>
          <span className={lang === 'ta' ? 'tamilTitle' : ''}>{t('title')}</span>
          <span className={styles.logoDot}>.</span>
        </Link>
      </div>
      
      <button 
        className={styles.menuButton} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <Link href="#services" className={styles.navLink} onClick={closeMenu}>{t('services')}</Link>
        <Link href="#gallery" className={styles.navLink} onClick={closeMenu}>{t('gallery')}</Link>
        <Link href="#testimonials" className={styles.navLink} onClick={closeMenu}>{t('testimonials')}</Link>
        <Link href="#contact" className={styles.navLink} onClick={closeMenu}>{t('contact')}</Link>
        
        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggleLanguage}>
            {lang === 'en' ? 'தமிழ்' : 'English'}
          </button>
          <button 
            className={styles.ctaButton} 
            onClick={() => {
              closeMenu();
              openBookingModal();
            }}
          >
            {t('bookNow')}
          </button>
        </div>
      </nav>
    </header>
  );
}
