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
  batchCode: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  fines: {
    type: [fines],
    required: true,
  },
});

fineSchema.index({ 'fines.studentId': 1 });

export default model('fines', fineSchema);
