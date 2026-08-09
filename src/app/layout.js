import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import { BookingProvider } from '../context/BookingContext';

export const metadata = {
  title: 'Sri Sankara Catering Services | Premium Catering',
  description: 'Premium catering services for weddings, corporate events, and private parties. Experience a seamless blend of gourmet flavors and impeccable service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
