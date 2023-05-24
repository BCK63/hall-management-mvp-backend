import { Schema, model } from 'mongoose';

const bookingModel = new Schema({
  bookedBy: { batch: String, coordinator: Schema.Types.ObjectId },
  time: { start: String, end: String },
}, { timestamps: true });

export default model('bookings', bookingModel);
