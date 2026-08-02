import './globals.css';
import Header from '../components/Header';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: 'Sri Sankara Catering Services | Premium Catering',
  description: 'Premium catering services for weddings, corporate events, and private parties. Experience a seamless blend of gourmet flavors and impeccable service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
