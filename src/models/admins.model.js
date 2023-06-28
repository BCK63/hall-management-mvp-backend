import { Schema, model } from 'mongoose';

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashPassword: {
    type: String,
    required: true,
    select: false,
  },
});

export default model('admins', adminSchema);
