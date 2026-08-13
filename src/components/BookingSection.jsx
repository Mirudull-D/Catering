"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Navigation, Maximize2, Map } from 'lucide-react';
import styles from './BookingSection.module.css';

export default function BookingSection() {
  const { t } = useLanguage();

  const defaultMsg = `Hello Sri Sankaraa Catering Services! 👋\n\nI would like to inquire about catering services for an upcoming function. Here are our event details:\n\n👤 Name: \n📅 Event Date: \n📍 Venue / Area in Chennai: \n👥 Expected Guests: \n🎉 Occasion (Wedding / Housewarming / Seemantham / Corporate / Birthday): \n\nCould you please share your menu packages and pricing? Looking forward to connecting with you! 🙏`;
  const whatsappUrl = `https://wa.me/9962548644?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <section id="contact" className={styles.bookingSection}>
      {/* Background Subtle Ambient Blue Glows */}
      <div className={`${styles.ambientDot} ${styles.dotTopLeft}`}></div>
      <div className={`${styles.ambientDot} ${styles.dotBottomRight}`}></div>

      <div className={styles.container}>
        <div className={styles.locationContainer}>
          
          {/* Left Side: Dark Info Card */}
          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.preTitle}>{t('visitUs') || 'visit us'}</span>
            
            <h2 className={styles.title}>
              <span className={styles.titleWhite}>{t('bookingTitleLine1') || 'Experience Divine'}</span>
              <br />
              <span className={styles.titleAccent}>{t('bookingTitleLine2') || 'Flavours.'}</span>
            </h2>

            <div className={styles.infoBlock}>
              <h4>{t('address') || 'ADDRESS'}</h4>
              <p className={styles.addressText}>
                {t('bookingAddress') || 'No.8/14, Sangam Street, Venkatapuram,\nAmbattur, Chennai - 600 053'}
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h4>{t('hours') || 'HOURS'}</h4>
              <p>{t('bookingHours') || 'Mon — Sun · 10:00 AM — 9:00 PM'}</p>
            </div>

            <div className={styles.infoBlock}>
              <h4>{t('bookingPhoneLabel') || 'PHONE / WHATSAPP'}</h4>
              <p className={styles.highlightText}>99625 48644</p>
            </div>


            <div className={styles.infoBlock}>
              <h4>{t('bookingInstaLabel') || 'INSTAGRAM'}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a 
                  href={t('bookingInstaUrl') || "https://www.instagram.com/srisankaraacateringservices"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.highlightText}
                  style={{ textDecoration: 'none' }}
                >
                  {t('bookingInstaValue') || '@srisankaraacateringservices'}
                </a>
                <a 
                  href={t('bookingInstaUrl2') || "https://www.instagram.com/srisankaraabrahmincatering"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.highlightText}
                  style={{ textDecoration: 'none' }}
                >
                  {t('bookingInstaValue2') || '@srisankaraabrahmincatering'}
                </a>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.primaryBtn}
              >
                {t('waBooking') || 'WhatsApp Booking'}
              </a>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.secondaryBtn}
              >
                {t('directions') || 'Directions'}
              </a>
            </div>
          </motion.div>

          {/* Right Side: Interactive Map Card */}
          <motion.div 
            className={styles.mapCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Embedded Google Maps */}
            <iframe 
              src="https://maps.google.com/maps?q=No.8/14,+Sangam+Street,+Venkatapuram,+Ambattur,+Chennai+-+600053&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Sankaraa Catering Location Map"
            ></iframe>

            {/* Center Floating Pin Callout */}
            <div className={styles.mapPinCallout}>
              <span className={styles.livePulseDot}></span>
              <span>{t('ourShopHere') || 'Our kitchen is right here!'}</span>
            </div>

            {/* Top-Left Floating Header Badge Box */}
            <div className={styles.mapOverlayHeader}>
              <div className={styles.mapOverlayHeaderTop}>
                <div className={styles.liveLocationBadge}>
                  <span className={styles.livePulseDot}></span>
                  <span>{t('liveLocation') || 'LIVE LOCATION'}</span>
                </div>
                <div className={styles.headerIconsGroup}>
                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.iconBtnSquare}
                    title="Open Map Location"
                  >
                    <ExternalLink size={13} color="#4b5563" />
                  </a>
                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.iconBtnBlue}
                    title="Get Directions"
                  >
                    <Navigation size={13} color="#ffffff" />
                  </a>
                </div>
              </div>
              <div className={styles.mapOverlayAddress}>
                {t('mapAddressFull') || 'Sri Sankaraa Catering, Sangam St, Ambattur, Chennai'}
              </div>
              <div className={styles.mapOverlayReviews}>
                {t('mapReviews') || '4.9 ★ (500+ Reviews)'}
              </div>
            </div>

            {/* Top-Right Circular Expand Icon */}
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.fullscreenBtn}
              title="Expand Map"
            >
              <Maximize2 size={15} color="#ffffff" />
            </a>

            {/* Bottom Centered Floating App Bar */}
            <div className={styles.bottomBarContainer}>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.bottomMapAppBtn}
              >
                <div className={styles.mapBtnIconCircle}>
                  <Map size={20} color="#ffffff" />
                </div>
                <span>{t('openInGoogleMaps') || 'Open in Google Maps App'}</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
