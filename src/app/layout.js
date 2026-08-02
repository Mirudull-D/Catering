import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'BluePlate Catering | Classic Elegance',
  description: 'Premium catering services for all your events.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
