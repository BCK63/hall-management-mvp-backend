import { Schema, model } from 'mongoose';

const fines = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'students',
    required: true,
  },
  fine: {
    type: Number,
    required: true,
    default: 0,
  },
  commission: {
    type: Number,
    required: true,
    default: 0,
  },
  lastAssignedBy: [Schema.Types.ObjectId],
}, { _id: false, timestamps: true });

const fineSchema = new Schema({
  batchId: {
    type: String,
    required: true,
  },
  fines: {
    type: [fines],
    required: true,
  },
});

export default model('fines', fineSchema);
