import { Schema, model } from 'mongoose';

const batchSchema = new Schema({
  batchCode: {
    required: true,
    type: String,
    unique: true,
  },
  trainer: {
    type: Schema.Types.ObjectId,
    ref: 'admins',
    required: true,
  },
  coordinators: [Schema.Types.ObjectId],
  isApproved: {
    type: Boolean,
    default: false,
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: 'admins',
  },
  isFineEnabled: {
    type: Boolean,
    default: true,
    required: true,
  },
  isCommissionEnabled: {
    type: Boolean,
    default: true,
    required: true,
  },
});

export default model('batches', batchSchema);
