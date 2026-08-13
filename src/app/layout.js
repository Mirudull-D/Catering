import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import { BookingProvider } from '../context/BookingContext';

export const metadata = {
  title: 'Sri Sankaraa Catering Services | Premium Catering',
  description: 'Premium catering services for weddings, corporate events, and private parties. Experience a seamless blend of gourmet flavors and impeccable service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Baloo+Thambi+2:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <BookingProvider>
            {children}
          </BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
