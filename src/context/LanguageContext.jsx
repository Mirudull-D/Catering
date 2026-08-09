"use client";

import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    // Header & Global
    title: "Sri Sankara Catering Services",
    services: "Services",
    menu: "Menu",
    gallery: "Gallery",
    testimonials: "Reviews",
    about: "About Us",
    contact: "Contact",
    bookNow: "Book a Consultation",
    
    // Hero
    heroHeadline1: "Exceptional Catering for ",
    heroHeadline2: "Memorable Events",
    heroDesc: "Experience a seamless blend of gourmet flavors and impeccable service. We bring culinary excellence and classic elegance to your weddings, corporate gatherings, and private parties.",
    viewMenus: "View Our Services",

    // About Strip (Stats)
    statYears: "Years Experience",
    statEvents: "Events Catered",
    statCities: "Cities Served",
    statClients: "Happy Clients",
    aboutStory: "With over 15 years of experience in the culinary arts, Sri Sankara Catering is dedicated to providing extraordinary food and service. Our chefs craft dishes using the freshest ingredients to ensure an unforgettable dining experience, keeping traditions alive with a modern touch.",
    
    // Services Section
    servicesTitle: "Our Premium Services",
    service1: "Wedding Catering",
    service1Desc: "Elegant and unforgettable traditional & modern catering for your special day.",
    service2: "Corporate Events",
    service2Desc: "Professional catering solutions for meetings, conferences, and office parties.",
    service3: "Birthday Parties",
    service3Desc: "Custom menus and impeccable service for your intimate gatherings and celebrations.",
    service4: "Live Counters",
    service4Desc: "Dynamic, fresh food stations featuring Dosa, Chaat, and Appam made to order.",
    service5: "Buffet Setup",
    service5Desc: "Luxurious buffet arrangements with premium chafing dishes and elegant decor.",
    service6: "South Indian Menus",
    service6Desc: "Authentic, traditional plantain leaf meals prepared with ancestral recipes.",
    viewDetails: "View Details",
    downloadBrochure: "Download Brochure",
    
    // Gallery Section
    galleryTitle: "Our Culinary Canvas",
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonialSummary: "4.9★ from 500+ successful events",
    socialProofTag: "Social Proof",
    writeReview: "Write a Review",
    
    // Menu Section
    menuTitle: "Menu Highlights",
    menuDesc: "A glimpse into our diverse culinary offerings.",
    tabVeg: "Vegetarian",
    tabNonVeg: "Non-Vegetarian",
    tabDesserts: "Desserts",
    tabLive: "Live Counters",
       // Booking / Contact Section
    contactTitle: "Plan Your Event With Us",
    contactDesc: "Ready to start planning? Fill out the form below or reach out to us directly.",
    contactTag: "Enquiry",
    locationTag: "Visit Us",
    locationTitle: "Our Location",
    locationDesc: "Come experience our premium catering services in person",
    openInMap: "Open in Map",
    hours: "Business Hours",
    formName: "Full Name",
    formDate: "Event Date",
    formType: "Event Type",
    formGuests: "Number of Guests",
    formMessage: "Additional Details",
    submitForm: "Send Enquiry",
    phone: "Phone",
    email: "Email",
    address: "Address",
    visitUs: "visit us",
    bookingTitle: "Experience Divine\nFlavours.",
    bookingAddress: "No 04 Udaiyaar Street, Ninnakarai Road,\nKattankulathur, Tamil Nadu 603203",
    bookingHours: "Mon — Sun · 10:00 AM — 9:00 PM",
    bookingPhoneLabel: "PHONE / WHATSAPP",
    bookingInstaLabel: "INSTAGRAM",
    waBooking: "WhatsApp Booking",
    directions: "Directions",
    
    // Philosophy Section
    philTitle: "Our Culinary Philosophy",
    philSub: "Keeping traditions alive with modern sophistication",
    philDesc1: "At Sri Sankara Catering, we believe that food is not just sustenance—it is a celebration of culture, taste, and togetherness. Our culinary philosophy centers on sourcing the finest ingredients, preserving time-honored traditional recipes, and presenting them with contemporary refinement.",
    philDesc2: "Whether serving a classic South Indian wedding sadhya or a modern corporate buffet, our chefs ensure that every dish is a masterpiece of authentic flavors and flawless preparation.",
    philPoint1: "100% Vegetarian & Pure Ingredients",
    philPoint2: "Time-Honored Traditional Recipes",
    philPoint3: "Contemporary Food Presentation",

    // Process Section
    procTitle: "Our Service Process",
    procSub: "How we bring your dream culinary experience to life",
    step1Title: "1. Consultation",
    step1Desc: "We sit down with you to understand your preferences, guests, theme, and custom menu requirements.",
    step2Title: "2. Tasting & Curation",
    step2Desc: "Our expert chefs prepare selected highlights so you can taste and perfect the menu prior to the event.",
    step3Title: "3. Flawless Execution",
    step3Desc: "From preparation to setup and service, our professional team delivers an impeccable dining experience.",
    
    // Gallery Page
    portfolioTag: "OUR PORTFOLIO",
    galleryHeading: "Gallery",
    gallerySubText: "A glimpse of the divine culinary journeys we've crafted",
    loadingGallery: "Loading gallery...",
    viewFullGallery: "View Full Gallery Page",
    photosText: "Photos",
    completePortfolio: "OUR COMPLETE PORTFOLIO",
    fullGallery: "Full Gallery",
    exploreGallery: "Explore all our signature dishes, sadhya sequence spreads, live counters, and catering setups.",
    backToHome: "← Back to Home",
    catAll: "All",
    catSadhya: "Sadhya",
    catBuffet: "Buffet",
    catLive: "Live Station",
    catDesserts: "Desserts",
    catWedding: "Wedding",
    catCorporate: "Corporate",
    
    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    footerText: "© 2026 Sri Sankara Catering Services. All rights reserved."
  },
  ta: {
    // Header & Global
    title: "ஸ்ரீ சங்கரா கேட்டரிங் சர்வீஸ்",
    services: "சேவைகள்",
    menu: "மெனு",
    gallery: "புகைப்படங்கள்",
    testimonials: "விமர்சனங்கள்",
    about: "எங்களை பற்றி",
    contact: "தொடர்பு",
    bookNow: "முன்பதிவு",
    
    // Hero
    heroHeadline1: "சிறந்த கேட்டரிங், ",
    heroHeadline2: "மறக்க முடியாத நிகழ்வுகளுக்கு",
    heroDesc: "உங்கள் திருமணங்கள், கார்ப்பரேட் கூட்டங்கள் மற்றும் தனிப்பட்ட விழாக்களுக்கு சுவையான உணவு மற்றும் சிறந்த சேவையை நாங்கள் வழங்குகிறோம்.",
    viewMenus: "எங்கள் சேவைகள்",

    // About Strip (Stats)
    statYears: "ஆண்டுகள் அனுபவம்",
    statEvents: "நிகழ்வுகள்",
    statCities: "நகரங்களில்",
    statClients: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    aboutStory: "15 ஆண்டுகளுக்கும் மேலான சமையல் அனுபவத்துடன், ஸ்ரீ சங்கரா கேட்டரிங் சிறந்த உணவு மற்றும் சேவையை வழங்க அர்ப்பணித்துள்ளது. எங்கள் சமையல்காரர்கள் புதிய பொருட்களைப் பயன்படுத்தி உணவுகளை தயார் செய்கிறார்கள்.",
    
    // Services Section
    servicesTitle: "எங்கள் சேவைகள்",
    service1: "திருமணம்",
    service1Desc: "உங்கள் சிறப்பு நாளுக்கு நேர்த்தியான மற்றும் மறக்க முடியாத பாரம்பரிய உணவு சேவை.",
    service2: "கார்ப்பரேட் நிகழ்வுகள்",
    service2Desc: "கூட்டங்கள் மற்றும் அலுவலக விழாக்களுக்கான தொழில்முறை உணவு சேவைகள்.",
    service3: "பிறந்தநாள் விழாக்கள்",
    service3Desc: "உங்கள் கொண்டாட்டங்களுக்கான தனிப்பயன் மெனுக்கள் மற்றும் சிறந்த சேவை.",
    service4: "நேரடி உணவகங்கள் (Live Counters)",
    service4Desc: "தோசை, சாட் மற்றும் ஆப்பம் போன்ற சூடான உணவுகள் உடனுக்குடன் வழங்கப்படும்.",
    service5: "பஃபே (Buffet)",
    service5Desc: "சிறந்த அலங்காரத்துடன் கூடிய உயர்தர பஃபே உணவு அமைப்பு.",
    service6: "தென்னிந்திய மெனுக்கள்",
    service6Desc: "பாரம்பரிய முறைப்படி வாழையிலையில் பரிமாறப்படும் சுவையான உணவு.",
    viewDetails: "மேலும் அறிய",
    downloadBrochure: "விவரங்களை பதிவிறக்க",
    
    // Gallery Section
    galleryTitle: "எங்கள் சமையல் கலை",
    
    // Testimonials
    testimonialsTitle: "வாடிக்கையாளர் கருத்துக்கள்",
    testimonialSummary: "500+ நிகழ்வுகளில் 4.9★ மதிப்பீடு",
    socialProofTag: "சமூக சான்று",
    writeReview: "விமர்சனம் எழுதவும்",
    
    // Menu Section
    menuTitle: "மெனு சிறப்பம்சங்கள்",
    menuDesc: "எங்கள் பல்வேறு சமையல் சலுகைகளின் ஒரு பார்வை.",
    tabVeg: "சைவம்",
    tabNonVeg: "அசைவம்",
    tabDesserts: "இனிப்புகள்",
    tabLive: "நேரடி உணவகங்கள்",
    
    // Booking / Contact Section
    contactTitle: "தொடர்பு கொள்ள",
    contactDesc: "உங்கள் நிகழ்வைத் திட்டமிட தயாரா? இன்றே எங்களைத் தொடர்புகொள்ளவும்.",
    contactTag: "விசாரணை",
    locationTag: "எங்களை சந்திக்கவும்",
    locationTitle: "எங்கள் அலுவலக இருப்பிடம்",
    locationDesc: "நேரடியாக எங்களை சந்தித்து உங்கள் நிகழ்வைப் பற்றி ஆலோசிக்கவும்",
    openInMap: "வரைபடத்தில் திறக்கவும்",
    hours: "அலுவலக நேரம்",
    formName: "முழு பெயர்",
    formDate: "நிகழ்வு தேதி",
    formType: "நிகழ்வு வகை",
    formGuests: "விருந்தினர்கள் எண்ணிக்கை",
    formMessage: "கூடுதல் விவரங்கள்",
    submitForm: "விவரங்களை அனுப்பவும்",
    phone: "தொலைபேசி",
    email: "மின்னஞ்சல்",
    address: "முகவரி",
    visitUs: "எங்களை சந்திக்கவும்",
    bookingTitle: "தெய்வீக சுவையை\nஅனுபவியுங்கள்.",
    bookingAddress: "எண் 04 உடையார் தெரு, நின்னக்கரை சாலை,\nகாட்டங்குளத்தூர், தமிழ்நாடு 603203",
    bookingHours: "திங்கள் — ஞாயிறு · காலை 10:00 — இரவு 9:00",
    bookingPhoneLabel: "தொலைபேசி / வாட்ஸ்அப்",
    bookingInstaLabel: "இன்ஸ்டாகிராம்",
    waBooking: "வாட்ஸ்அப் முன்பதிவு",
    directions: "வழிசெலுத்தல்",
    
    // Philosophy Section
    philTitle: "எங்கள் சமையல் தத்துவம்",
    philSub: "நவீன நேர்த்தியுடன் பாரம்பரியத்தை உயிர்ப்புடன் வைத்திருத்தல்",
    philDesc1: "ஸ்ரீ சங்கரா கேட்டரிங்கில், உணவு என்பது வெறும் பசி ஆற்றுவது மட்டுமல்ல—அது கலாச்சாரம், சுவை மற்றும் ஒற்றுமையின் கொண்டாட்டம் என்று நாங்கள் நம்புகிறோம். சிறந்த பொருட்களைத் தேர்ந்தெடுத்து, பாரம்பரிய முறைகளை மாற்றாமல், நவீன நேர்த்தியுடன் உங்களுக்கு வழங்குகிறோம்.",
    philDesc2: "பாரம்பரிய தென்னிந்திய திருமண விருந்தாக இருந்தாலும் அல்லது நவீன கார்ப்பரேட் பஃபேவாக இருந்தாலும், எங்கள் சமையல்காரர்கள் ஒவ்வொரு உணவும் உண்மையான சுவையுடனும் நேர்த்தியுடனும் தயாரிக்கப்படுவதை உறுதி செய்கிறார்கள்.",
    philPoint1: "100% சுத்தமான சைவ மற்றும் தரமான பொருட்கள்",
    philPoint2: "தலைமுறைகள் கடந்த பாரம்பரிய சமையல் முறைகள்",
    philPoint3: "நவீன மற்றும் நேர்த்தியான உணவு அலங்காரம்",
 
    // Process Section
    procTitle: "எங்கள் சேவை செயல்முறை",
    procSub: "உங்கள் கனவு சமையல் அனுபவத்தை நாங்கள் எவ்வாறு உருவாக்குகிறோம்",
    step1Title: "1. கலந்தாலோசனை",
    step1Desc: "உங்கள் விருப்பங்கள், விருந்தினர்கள் மற்றும் மெனு தேவைகளை நாங்கள் முழுமையாக கேட்டுத் தெரிந்துகொள்கிறோம்.",
    step2Title: "2. சுவைத்தல் மற்றும் தேர்வு",
    step2Desc: "எங்கள் சமையல்காரர்கள் மெனுவை தயாரித்து, நிகழ்வுக்கு முன்பே நீங்கள் சுவைத்துப் பார்த்து இறுதி செய்ய உதவுகிறோம்.",
    step3Title: "3. நேர்த்தியான செயலாக்கம்",
    step3Desc: "தயாரிப்பு முதல் மேஜை அலங்காரம் மற்றும் சேவை வரை, எங்கள் குழு ஒரு குறைபாடற்ற உணவு அனுபவத்தை வழங்குகிறது.",
    
    // Gallery Page
    portfolioTag: "எங்கள் தொகுப்பு",
    galleryHeading: "புகைப்படங்கள்",
    gallerySubText: "நாங்கள் உருவாக்கிய தெய்வீக சமையல் பயணங்களின் ஒரு பார்வை",
    loadingGallery: "ஏற்றப்படுகிறது...",
    viewFullGallery: "முழு கேலரி பக்கத்தைக் காண்க",
    photosText: "புகைப்படங்கள்",
    completePortfolio: "எங்கள் முழுமையான தொகுப்பு",
    fullGallery: "முழு கேலரி",
    exploreGallery: "எங்கள் அனைத்து சிக்னேச்சர் உணவுகள், சாத்யா விரிப்புகள், லைவ் கவுண்டர்கள் மற்றும் கேட்டரிங் அமைப்புகளை ஆராயுங்கள்.",
    backToHome: "← முகப்புக்குத் திரும்பு",
    catAll: "அனைத்தும்",
    catSadhya: "சாத்யா",
    catBuffet: "பஃபே",
    catLive: "லைவ் ஸ்டேஷன்",
    catDesserts: "இனிப்புகள்",
    catWedding: "திருமணம்",
    catCorporate: "கார்ப்பரேட்",
    
    // Footer
    quickLinks: "முக்கிய இணைப்புகள்",
    followUs: "சமூக வலைத்தளங்கள்",
    footerText: "© 2026 ஸ்ரீ சங்கரா கேட்டரிங் சர்வீஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  React.useEffect(() => {
    if (lang === 'ta') {
      document.documentElement.classList.add('tamil-mode');
    } else {
      document.documentElement.classList.remove('tamil-mode');
    }
  }, [lang]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
