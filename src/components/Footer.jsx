"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang, t } = useLanguage();
  const { openBookingModal } = useBooking();

  return (
    <footer className={styles.footer}>

      {/* CTA Banner */}
      <div className={styles.ctaBannerWrap}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaBannerLeft}>
            <span className={styles.ctaTag}>START PLANNING</span>
            <h2 className={styles.ctaTitle}>
              Ready to make your event unforgettable?
            </h2>
            <p className={styles.ctaDesc}>
              Talk to our team — custom menus, full-service setup, and a team that cares.
            </p>
            <div className={styles.ctaBtnRow}>
              <button className={styles.ctaPrimary} onClick={openBookingModal}>
                Book Your Event →
              </button>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.ctaWA}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className={styles.ctaBannerRight}>
            <div className={styles.ctaImageStack}>
              <img src="/gallery/wedding_catering.png" alt="Wedding" className={styles.stackImg1} />
              <img src="/gallery/buffet_setup_1785684198318.png" alt="Buffet" className={styles.stackImg2} />
            </div>
          </div>
        </div>
      </div>

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
                Chennai's trusted catering partner for weddings, corporate events, and every celebration in between.
              </p>
              <div className={styles.socialRow}>
                {[
                  { label: 'FB', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                  { label: 'IG', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  { label: 'YT', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg> },
                  { label: 'WA', href: 'https://wa.me/919876543210', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> },
                ].map(s => (
                  <a key={s.label} href={s.href} className={styles.socialIcon} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {[
                  { label: 'Services', href: '#services' },
                  { label: 'Gallery', href: '#gallery' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'Location', href: '#contact' },
                ].map(l => (
                  <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.linkList}>
                {['Wedding Catering', 'Corporate Events', 'Birthday Parties', 'Live Counters', 'Custom Buffets', 'South Indian Sadhya'].map(s => (
                  <li key={s}><Link href="#services">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactList}>
                {[
                  { icon: '📍', text: '123 Catering St, Anna Nagar, Chennai' },
                  { icon: '📞', text: '+91 98765 43210' },
                  { icon: '✉️', text: 'hello@srisankaracatering.com' },
                  { icon: '🕐', text: 'Mon–Sun, 10AM–8PM' },
                ].map((c, i) => (
                  <div key={i} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{c.icon}</span>
                    <span className={styles.contactText}>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.bottomBar}>
            <p className={styles.copyright}>© 2025 Sri Sankara Catering Services. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
