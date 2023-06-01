import { Schema, model } from 'mongoose';

const slotSchema = new Schema({
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

const layoutModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  slots: {
    type: [slotSchema],
    required: true,
  },
});

export default model('layouts', layoutModel);
