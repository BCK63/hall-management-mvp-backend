import * as bookingRepo from '../repositories/booking.repository.js';

export const doNewBooking = async (batch, bookedBy, isAdmin, time, date) => {
  return bookingRepo.doNewBooking({
    batch, bookedBy, isAdmin, time, date,
  });
};

export const getAllBookings = async () => bookingRepo.getAllBookings();

export const getBooking = async (id) => bookingRepo.getBookingById(id);

export const deleteBooking = async (id) => bookingRepo.deleteBookingById(id);

export const filterBookings = async (date) => bookingRepo.filterBookingsByDate(date);
