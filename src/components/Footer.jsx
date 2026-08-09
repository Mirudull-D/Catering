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
            <span className={styles.ctaTag}>{t('startPlanningTag')}</span>
            <h2 className={styles.ctaTitle}>
              {t('readyTitle')}
            </h2>
            <p className={styles.ctaDesc}>
              {t('readySub')}
            </p>
            <div className={styles.ctaBtnRow}>
              <button className={styles.ctaPrimary} onClick={openBookingModal}>
                {t('bookEventBtn')} →
              </button>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840874966'}`} target="_blank" rel="noopener noreferrer" className={styles.ctaWA}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                {t('whatsappUsBtn')}
              </a>
            </div>
          </div>
          <div className={styles.ctaBannerRight}>
            <div className={styles.ctaImageStack}>
              <img src="/gallery/wedding_catering.png" alt="Wedding" className={styles.stackImg1} />
              <img src="/gallery/buffet_setup_1785684185063.png" alt="Buffet" className={styles.stackImg2} />
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
                Chennai&apos;s trusted catering partner for weddings, corporate events, and every celebration in between.
              </p>
              <div className={styles.socialRow}>
                {[
                  { label: 'FB', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                  { label: 'IG', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  { label: 'YT', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg> },
                  { label: 'WA', href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840874966'}`, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> },
                ].map(s => (
                  <a key={s.label} href={s.href} className={styles.socialIcon} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>{t('quickLinks')}</h4>
              <ul className={styles.linkList}>
                {[
                  { label: t('services'), href: '#services' },
                  { label: t('gallery'), href: '#gallery' },
                  { label: t('testimonials'), href: '#testimonials' },
                  { label: t('contact'), href: '#contact' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>{t('services')}</h4>
              <ul className={styles.linkList}>
                {[t('service1'), t('service2'), t('service3'), t('service4'), t('service5'), t('service6')].map(s => (
                  <li key={s}><Link href="#services">{s}</Link></li>
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
                  <span className={styles.contactText}>123 Catering St, Anna Nagar, Chennai</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span className={styles.contactText}>{process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 98408 74966'}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <span className={styles.contactText}>hello@srisankaracatering.com</span>
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
