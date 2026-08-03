"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import styles from './Footer.module.css';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h2>{t('contactTitle')}</h2>
            <p>{t('contactDesc')}</p>
          </div>
          <Link href="#contact" className={`${styles.ctaButton} shimmer-btn`}>
            {t('bookNow')}
          </Link>
        </div>

        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={lang === 'ta' ? 'tamilTitle' : ''}>{t('title')}</span>
              <span className={styles.logoDot}>.</span>
            </Link>
            <p className={styles.brandDesc}>
              {t('heroDesc')}
            </p>
          </div>

          {/* Links Col */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>{t('quickLinks')}</h3>
            <ul className={styles.linkList}>
              <li><Link href="#about">{t('about')}</Link></li>
              <li><Link href="#gallery">{t('gallery')}</Link></li>
              <li><Link href="#testimonials">{t('testimonials')}</Link></li>
              <li><Link href="#contact">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Social Col */}
          <div className={styles.socialCol}>
            <h3 className={styles.colTitle}>{t('followUs')}</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon} aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className={styles.icon} aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className={styles.icon} aria-label="WhatsApp"><WhatsAppIcon /></a>
              <a href="#" className={styles.icon} aria-label="YouTube"><YoutubeIcon /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>{t('footerText')}</p>
        </div>
      </div>
    </footer>
  );
}
