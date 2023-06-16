import bookingModel from '../models/booking.model.js';

export const doNewBooking = async (data) => bookingModel.create(data);

export const getAllBookings = async () => bookingModel.find();

export const getBookingById = async (id) => bookingModel.findById(id);

export const deleteBookingById = async (id) => bookingModel.findByIdAndDelete(id);
