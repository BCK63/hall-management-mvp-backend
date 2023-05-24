import { Schema, model } from 'mongoose';

const batchSchema = new Schema({
  batchCode: {
    required: true,
    type: String,
  },
  trainer: {
    type: Schema.Types.ObjectId,
    ref: 'admins',
    required: true,
  },
  coordinators: [Schema.Types.ObjectId],
});

export default model('batches', batchSchema);
