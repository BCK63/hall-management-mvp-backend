import { Schema, model } from 'mongoose';

const bookingModel = new Schema({
  batch: {
    type: String,
    required: true,
  },
  bookedBy: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  time: { start: String, end: String },
  date: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

export default model('bookings', bookingModel);
