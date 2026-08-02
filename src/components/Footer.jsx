"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
              <li><Link href="#services">{t('services')}</Link></li>
              <li><Link href="#menu">{t('menu')}</Link></li>
              <li><Link href="#gallery">{t('gallery')}</Link></li>
              <li><Link href="#testimonials">{t('testimonials')}</Link></li>
              <li><Link href="#contact">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Social Col */}
          <div className={styles.socialCol}>
            <h3 className={styles.colTitle}>{t('followUs')}</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon} aria-label="Facebook">FB</a>
              <a href="#" className={styles.icon} aria-label="Instagram">IG</a>
              <a href="#" className={styles.icon} aria-label="WhatsApp">WA</a>
              <a href="#" className={styles.icon} aria-label="YouTube">YT</a>
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
