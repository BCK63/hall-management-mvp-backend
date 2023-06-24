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
  },
  status: {
    type: String,
    enum: ['PENDING', 'REJECTED', 'APPROVED'],
    default: 'PENDING',
  },
  inviteToken: {
    type: String,
    required: true,
  },
}));

export default tempAdminSchema;
