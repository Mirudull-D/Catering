"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import styles from './Footer.module.css';

export default function Footer({ isAdmin = false }) {
  const { lang, t } = useLanguage();
  const { openBookingModal } = useBooking();

  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 99625 48644';
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9962548644';
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=No.8%2F14,+Sangam+Street,+Venkatapuram,+Ambattur,+Chennai+-+600053";

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/' + href;
      }
    }
  };

  return (
    <footer className={styles.footer}>
      {isAdmin ? (
        <div className={styles.mainFooter} style={{ padding: '1rem 0' }}>
          <div className={styles.container}>
            <div className={styles.bottomBar}>
              <div className={styles.leftCopyright}>
                © 2026 Sri Sankara Catering Services. All Rights Reserved
              </div>
              <div className={styles.centerPowered}>
                Powered by <a href="https://www.cenexasystems.com" target="_blank" rel="noopener noreferrer" className={styles.cenexaLink}><strong>Cenexa Systems</strong></a> © 2026
              </div>
              <div className={styles.rightTagline}>
                AUTHENTIC • TRADITIONAL • PREMIUM
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <span className={lang === 'ta' ? 'tamilTitle' : ''}>{t('title')}</span>
                <span className={styles.logoDot}>.</span>
              </Link>
              <p className={styles.brandDesc}>
                Chennai&apos;s trusted catering partner for weddings, corporate events, and traditional grand celebrations.
              </p>

              {/* Working Interactive Action Buttons */}
              <div className={styles.footerActionRow}>
                <button 
                  type="button" 
                  className={styles.actionBtnPrimary}
                  onClick={() => openBookingModal()}
                >
                  {t('bookNow') || 'Book a Consultation'}
                </button>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.actionBtnSecondary}
                >
                  {t('waBooking') || 'WhatsApp Booking'}
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
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
                  <li key={l.href}>
                    <a 
                      href={l.href} 
                      onClick={(e) => handleNavClick(e, l.href)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column - Clickable Text Links, No Icons/Emojis */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>{t('contact')}</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <a 
                    href={GOOGLE_MAPS_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactLink}
                  >
                    No.8/14, Sangam Street, Venkatapuram, Ambattur, Chennai - 600 053
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                    className={styles.contactLink}
                  >
                    Call: {PHONE_NUMBER}
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactText}>Working Hours: Mon–Sun, 10AM–8PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot-Style Sleek Horizontal Bottom Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.leftCopyright}>
              © 2026 Sri Sankara Catering Services. All Rights Reserved
            </div>

            <div className={styles.centerPowered}>
              Powered by <a href="https://www.cenexasystems.com" target="_blank" rel="noopener noreferrer" className={styles.cenexaLink}><strong>Cenexa Systems</strong></a> © 2026
            </div>

            <div className={styles.rightTagline}>
              AUTHENTIC • TRADITIONAL • PREMIUM
            </div>
          </div>
        </div>
        </div>
      )}
    </footer>
  );
}
