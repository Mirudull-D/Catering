"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang, t } = useLanguage();
  const { openBookingModal } = useBooking();

  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 98408 74966';
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840874966';

  return (
    <footer className={styles.footer}>

      {/* Main footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>

          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <span className={lang === 'ta' ? 'tamilTitle' : ''}>{t('title')}</span>
                <span className={styles.logoDot}>.</span>
              </Link>
              <p className={styles.brandDesc}>
                Chennai&apos;s trusted catering partner for weddings, corporate events, and every celebration in between.
              </p>
              <div className={styles.socialRow}>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  className={styles.socialIcon} 
                  aria-label="WhatsApp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                  className={styles.socialIcon} 
                  aria-label="Phone"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>{t('quickLinks')}</h4>
              <ul className={styles.linkList}>
                {[
                  { label: t('services'), href: '#services' },
                  { label: t('menu'), href: '#menu-explorer' },
                  { label: t('gallery'), href: '#gallery' },
                  { label: t('testimonials'), href: '#testimonials' },
                  { label: t('contact'), href: '#contact' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>{t('contact')}</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className={styles.contactText}>No.8/14, Sangam Street, Venkatapuram, Ambattur, Chennai - 600 053</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span className={styles.contactText}>{PHONE_NUMBER}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <span className={styles.contactText}>Mon–Sun, 10AM–8PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.bottomBar}>
            <p className={styles.copyright}>© 2026 Sri Sankara Catering Services. All rights reserved.</p>

            <div className={styles.poweredByCenter}>
              Powered by <a href="https://www.cenexasystems.com" target="_blank" rel="noopener noreferrer" className={styles.cenexaLink}>Cenexa Systems</a> © 2026
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
