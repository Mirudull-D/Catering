import Header from '../../components/Header';
import BookingModalWrapper from '../../components/BookingModalWrapper';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <BookingModalWrapper />
    </>
  );
}
