import { Schema, model } from 'mongoose';

const slotSchema = new Schema({
  start: String,
  end: String,
});

const layoutModel = new Schema({
  slots: {
    type: [slotSchema],
    required: true,
  },
});

export default model('layouts', layoutModel);
