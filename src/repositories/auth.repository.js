import bcrypt from 'bcrypt';
import studentsModel from '../models/students.model.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';

export const loginRepository = async ({ email, password }) => {
  const user = await studentsModel.findOne({ email });
  if (!user) throw new UnAuthorizedException('No users found for the given email');
  const checkPassword = await bcrypt.compare(user.hashPassword, password);
  if (!checkPassword) throw new UnAuthorizedException('Invalid Password');
};

export const sample = {};
