import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  isLeader: {
    default: false,
  },
  hashPassword: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  batch:{
    type:String,
    required:true,
  },
});

export default model('students', userSchema);
