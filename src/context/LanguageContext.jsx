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
    formName: "Full Name",
    formDate: "Event Date",
    formType: "Event Type",
    formGuests: "Number of Guests",
    formMessage: "Additional Details",
    submitForm: "Send Enquiry",
    phone: "Phone",
    email: "Email",
    address: "Address",
    
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
    service1: "திருமணங்கள்",
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
    formName: "முழு பெயர்",
    formDate: "நிகழ்வு தேதி",
    formType: "நிகழ்வு வகை",
    formGuests: "விருந்தினர்கள் எண்ணிக்கை",
    formMessage: "கூடுதல் விவரங்கள்",
    submitForm: "விவரங்களை அனுப்பவும்",
    phone: "தொலைபேசி",
    email: "மின்னஞ்சல்",
    address: "முகவரி",
    
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

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
