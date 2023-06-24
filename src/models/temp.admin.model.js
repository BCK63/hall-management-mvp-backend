import { model, Schema } from 'mongoose';

const tempAdminSchema = model('tempAdmin', new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashPassword: {
    type: String,
    select: false,
  },
  status: {
    type: String,
    enum: ['PENDING', 'REJECTED'],
    default: 'PENDING',
  },
  inviteToken: {
    type: String,
    required: true,
  },
}));

export default tempAdminSchema;
