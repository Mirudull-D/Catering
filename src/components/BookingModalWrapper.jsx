"use client";

import { useBooking } from '../context/BookingContext';
import BookingModal from './BookingModal';

export default function BookingModalWrapper() {
  const { isBookingModalOpen, closeBookingModal } = useBooking();
  return <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />;
}
