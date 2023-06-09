import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  isLeader: {
    type: Boolean,
    default: false,
  },
  hashPassword: {
    required: true,
    type: String,
    select: false,
  },
  email: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
});

export default model('students', userSchema);
