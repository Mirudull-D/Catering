"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import styles from './InteractiveMenuExplorer.module.css';

const SERVING_STEPS = [
  {
    id: 1,
    title: { en: 'Morning Breakfast Feast', ta: 'காலை டிபன் சிற்றுண்டி' },
    subtitle: { en: 'Filter Coffee, Fluffy Idlis, Crispy Vada & Variety Rice', ta: 'டிகிரி காபி, இட்லி, பொங்கல், வடை & சித்ரான்னங்கள்' },
    icon: '☕',
    dishes: [
      { name: { en: 'Filter Coffee & Juice', ta: 'பில்டர் காபி & ஜூஸ்' }, icon: '☕', desc: { en: 'Freshly brewed Kumbakonam Degree Coffee or fresh Fruit Juice.', ta: 'கும்பகோணம் டிகிரி காபி மற்றும் புதிய பழச்சாறு.' } },
      { name: { en: 'Badusha & Kesari', ta: 'பாதுஷா & கேசரி' }, icon: '🧈', desc: { en: 'Authentic Badusha sweet & aromatic Pineapple Kesari.', ta: 'சுவையான பாதுஷா மற்றும் அன்னாசி கேசரி.' } },
      { name: { en: 'Idli, Pongal & Vada', ta: 'இட்லி, பொங்கல் & வடை' }, icon: '🥞', desc: { en: 'Soft Mallipoo Idli, Ghee Ven Pongal & Crispy Medu Vada.', ta: 'மல்லிகைப் பூ இட்லி, நெய் வெண் பொங்கல் மற்றும் மெதுவடை.' } },
      { name: { en: 'Brinji & Mango Rice', ta: 'வெஜ் பிரிஞ்சி & மாங்காய் சாதம்' }, icon: '🍚', desc: { en: 'Vegetable Brinji & spicy Tangy Mango Rice.', ta: 'காய்கறி பிரிஞ்சி மற்றும் மாங்காய் சாதம்.' } },
      { name: { en: 'Coconut & Puli Rice', ta: 'தேங்காய் & புளி சாதம்' }, icon: '🥥', desc: { en: 'Coconut Rice & authentic Kovil Puliogare.', ta: 'தேங்காய் சாதம் மற்றும் கோவில் புளியோதரை.' } },
      { name: { en: 'Poriyal, Avial & Thuvaiyal', ta: 'பொரியல், அவியல் & துவையல்' }, icon: '🥗', desc: { en: 'Potato Poriyal, Vegetable Avial & Mint Thuvaiyal.', ta: 'உருளை பொரியல், அவியல் மற்றும் புதினா துவையல்.' } }
    ],
    heritageTip: {
      en: 'Our breakfast menu starts with traditional sweets & hot filter coffee before serving piping hot idlis and flavorful variety rices.',
      ta: 'எங்கள் காலை உணவு பாரம்பரிய இனிப்பு மற்றும் சுடச்சுட பில்டர் காபியுடன் தொடங்கி சுவையான உணவுகளுடன் நிறைவடைகிறது.'
    }
  },
  {
    id: 2,
    title: { en: 'Grand Banana Leaf Feast (Sadhya)', ta: 'மதியம் பிரமாண்ட வாழையிலை விருந்து' },
    subtitle: { en: 'Authentic 20+ Item South Indian Leaf Sadhya', ta: '20+ சுவைகளுடன் கூடிய பாரம்பரிய தென்னிந்திய சத்யா விருந்து' },
    icon: '🍃',
    dishes: [
      { name: { en: 'Dal, Ghee & Sambar', ta: 'பருப்பு, நெய் & சாம்பார்' }, icon: '🧈', desc: { en: 'First Course: Creamy Moong dal topped with cow ghee & roasted spice Sambar.', ta: 'முதல் பந்தி: நெய் மணக்கும் பருப்பு சாதம் மற்றும் சுவையான சாம்பார்.' } },
      { name: { en: 'Vatha Kuzhambu & Rasam', ta: 'வத்தக்குழம்பு & ரசம்' }, icon: '🍲', desc: { en: 'Second Course: Tangy Vatha Kuzhambu & digestion-boosting Pepper Garlic Rasam.', ta: 'இரண்டாம் பந்தி: மணமணக்கும் வத்தக்குழம்பு மற்றும் மிளகு ரசம்.' } },
      { name: { en: 'Peas Poriyal & Avial', ta: 'பட்டாணி பொரியல் & அவியல்' }, icon: '🥦', desc: { en: 'Potato Peas Poriyal & Kerala style mixed vegetable Avial.', ta: 'உருளை பட்டாணி பொரியல் மற்றும் பாரம்பரிய அவியல்.' } },
      { name: { en: 'Veg Brinji & Raitha', ta: 'பிரிஞ்சி & தயிர் பச்சடி' }, icon: '🥘', desc: { en: 'Special Flavored Rice served with chilled Onion Raitha.', ta: 'சிறப்பு காய்கறி பிரிஞ்சி மற்றும் வெங்காய பச்சடி.' } },
      { name: { en: 'Semiya Milk Payasam', ta: 'சேமியா பால் பாயாசம்' }, icon: '🍯', desc: { en: 'Rich cardamom milk payasam garnished with ghee cashews & raisins.', ta: 'முந்திரி திராட்சை தூவிய சுவையான சேமியா பால் பாயாசம்.' } },
      { name: { en: 'Leaf, Pappadam & Pickle', ta: 'வாழை இலை & அப்பளம்' }, icon: '🍘', desc: { en: 'Served on fresh green banana leaf with Guruvayur Pappadam & Mango pickle.', ta: 'பச்சை வாழை இலையில் பரிமாறப்படும் அப்பளம் மற்றும் மாங்காய் ஊறுகாய்.' } }
    ],
    heritageTip: {
      en: 'In South Indian Sadhya tradition, meals are served sequentially starting with sweet & ghee dal, moving to Sambar and Rasam, and ending with Moru.',
      ta: 'தென்னிந்திய சாத்யா முறையில், இனிப்பு மற்றும் நெய் பருப்பில் தொடங்கி, சாம்பார், ரசம் வழியாக மோரில் நிறைவடைகிறது.'
    }
  },
  {
    id: 3,
    title: { en: 'Evening Tiffin & Snacks', ta: 'மாலை டிபன் & சிற்றுண்டி' },
    subtitle: { en: 'Fresh Halwa, Crispy Bondas & Hot Beverages', ta: 'சூடான அல்வா, போண்டா மற்றும் காபி' },
    icon: '🫖',
    dishes: [
      { name: { en: 'Carrot Halwa', ta: 'கேரட் அல்வா' }, icon: '🥕', desc: { en: 'Hot melt-in-the-mouth Carrot Halwa made with pure cow ghee.', ta: 'பசு நெய்யில் செய்த மணமான கேரட் அல்வா.' } },
      { name: { en: 'Mysore Bonda', ta: 'மைசூர் போண்டா' }, icon: '🧆', desc: { en: 'Crispy golden Mysore Bonda served with spicy coconut chutney.', ta: 'தேங்காய் சட்னியுடன் கூடிய மொறுமொறு மைசூர் போண்டா.' } },
      { name: { en: 'Rava Kichadi & Sambar', ta: 'ரவா கிச்சடி & சாம்பார்' }, icon: '🍲', desc: { en: 'Ghee Rava Kichadi served with hot Tiffin Sambar.', ta: 'டிபன் சாம்பாருடன் கூடிய மணமணக்கும் ரவா கிச்சடி.' } },
      { name: { en: '2 Chutney Varieties', ta: 'சட்னி 2 வகைகள்' }, icon: '🥥', desc: { en: 'Fresh Coconut Chutney & spicy Kara Chutney.', ta: 'தேங்காய் சட்னி மற்றும் கார சட்னி.' } },
      { name: { en: 'Degree Filter Coffee', ta: 'டிகிரி பில்டர் காபி' }, icon: '☕', desc: { en: 'Freshly pressed brass dabba filter coffee.', ta: 'பித்தளை டம்ளரில் பரிமாறப்படும் மணமான பில்டர் காபி.' } }
    ],
    heritageTip: {
      en: 'Evening tiffin brings warmth to your guests with freshly fried bondas and hot filter coffee.',
      ta: 'மாலை வேளையில் சூடான போண்டா மற்றும் பில்டர் காபி விருந்தினர்களை மகிழ்ச்சியடைய வைக்கும்.'
    }
  },
  {
    id: 4,
    title: { en: 'Grand Dinner Buffet & Live Stalls', ta: 'இரவு டின்னர் & பஃபே (Live Stalls)' },
    subtitle: { en: 'Multi-Cuisine Buffet, Starters & Fun Stalls', ta: 'பலவகை பஃபே உணவுகள் மற்றும் நேரடி உணவகங்கள்' },
    icon: '🎪',
    dishes: [
      { name: { en: 'Paneer Tikka & Gobi 65', ta: 'பன்னீர் டிக்கா & கோபி 65' }, icon: '🍢', desc: { en: 'Tandoori Paneer Tikka, Gobi 65 & Corn Samosa.', ta: 'தந்தூரி பன்னீர் டிக்கா மற்றும் கோபி 65.' } },
      { name: { en: 'Coin Parotta & Idiyappam', ta: 'காயின் பரோட்டா & இடியாப்பம்' }, icon: '🫓', desc: { en: 'Coin Parotta & Idiyappam served with White Vegetable Kurma.', ta: 'வெள்ளை காய்கறி குர்மாவுடன் கூடிய பரோட்டா & இடியாப்பம்.' } },
      { name: { en: 'Noodles & Mushroom Biryani', ta: 'நூடுல்ஸ் & காளான் பிரியாணி' }, icon: '🍜', desc: { en: 'Schezwan Noodles & aromatic Mushroom Biryani with Raitha.', ta: 'சுவையான நூடுல்ஸ் மற்றும் காளான் பிரியாணி.' } },
      { name: { en: 'Elaneer Payasam & Ada Pradhaman', ta: 'இளநீர் பாயாசம் & அடை பிரதமன்' }, icon: '🥥', desc: { en: 'Tender Coconut Payasam & Kerala style Ada Pradhaman.', ta: 'குளிர்ந்த இளநீர் பாயாசம் மற்றும் அடை பிரதமன்.' } },
      { name: { en: 'Live Chaat Station', ta: 'பானி பூரி கவுண்டர்' }, icon: '🌮', desc: { en: 'Live Pani Puri, Sev Puri & Bhel Puri counter.', ta: 'நேரடி பானி பூரி மற்றும் சேவ் பூரி ஸ்டால்.' } },
      { name: { en: 'Cotton Candy, Popcorn & Beeda', ta: 'பஞ்சு மிட்டாய் & பீடா' }, icon: '🍿', desc: { en: 'Live Cotton Candy, Popcorn stall & Sweet Beeda.', ta: 'குழந்தைகளுக்கு பஞ்சு மிட்டாய் மற்றும் ஸ்வீட் பீடா.' } }
    ],
    heritageTip: {
      en: 'Our grand dinner buffet combines traditional delicacies with live interactive stalls for unforgettable celebrations.',
      ta: 'இரவு நேரத்தில் பலவகை பாரம்பரிய உணவுகளுடன் கூடிய பிரமாண்ட பஃபே விருந்து.'
    }
  }
];

export default function InteractiveMenuExplorer() {
  const { lang, t } = useLanguage();
  const { openBookingModal } = useBooking();
  const [activeStep, setActiveStep] = useState(SERVING_STEPS[0]);

  const getText = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || '';
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.preTitle}>🌿 {t('leafTag')}</span>
          <h2 className={styles.title}>{t('leafTitle')}</h2>
          <p className={styles.subtitle}>
            {t('leafSub')}
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className={styles.stepTabs}>
          {SERVING_STEPS.map((step) => (
            <button
              key={step.id}
              className={`${styles.tabBtn} ${activeStep.id === step.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveStep(step)}
            >
              <span className={styles.stepNum}>0{step.id}</span>
              <span className={styles.stepIcon}>{step.icon}</span>
              <span className={styles.stepTitle}>{getText(step.title)}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className={styles.showcaseCard}
          >
            <div className={styles.showcaseHeader}>
              <div>
                <span className={styles.stepBadge}>STEP 0{activeStep.id} OF 04</span>
                <h3 className={styles.cardMainTitle}>{getText(activeStep.title)}</h3>
                <p className={styles.cardSubtitle}>{getText(activeStep.subtitle)}</p>
              </div>
              <button className={styles.bookMenuCta} onClick={openBookingModal}>
                Book This Sadhya Experience →
              </button>
            </div>

            {/* Dish Placement Grid */}
            <div className={styles.dishesGrid}>
              {activeStep.dishes.map((dish, i) => (
                <div key={i} className={styles.dishCard}>
                  <div className={styles.dishHeader}>
                    <span className={styles.dishIcon}>{dish.icon}</span>
                    <span className={styles.dishName}>{getText(dish.name)}</span>
                  </div>
                  <p className={styles.dishDesc}>{getText(dish.desc)}</p>
                </div>
              ))}
            </div>

            {/* Heritage Lore Box */}
            <div className={styles.loreBox}>
              <span className={styles.loreIcon}>📜</span>
              <div>
                <span className={styles.loreTitle}>ANCIENT HERITAGE WISDOM</span>
                <p className={styles.loreText}>{getText(activeStep.heritageTip)}</p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
