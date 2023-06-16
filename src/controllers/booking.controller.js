import * as bookingServices from '../services/booking.services.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { success } from '../utils/responseApi.js';

export const Booking = catchAsync(async (req, res) => {
  const {
    batch,
    bookedBy,
    isAdmin,
    time,
  } = req.body;
  const booking = await bookingServices.doNewBooking(batch, bookedBy, isAdmin, time);
  res.status(201).json(success('Booking Succesfull', { booking }));
});

export const AllBookings = catchAsync(async (req, res) => {
  const bookings = await bookingServices.getAllBookings();
  res.json(success('bookings', { bookings }));
});

export const BookingById = catchAsync(async (req, res) => {
  const { bookingId } = req.params;
  const booking = await bookingServices.getBooking(bookingId);
  res.json(success('booking', { booking }));
});

export const deleteBooking = catchAsync(async (req, res) => {
  const { bookingId } = req.params;
  const deletedBooking = await bookingServices.deleteBooking(bookingId);
  res.json(success('Booking deleted', { booking: deletedBooking }));
});
