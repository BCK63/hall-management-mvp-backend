import bcrypt from 'bcrypt';
import { findByStudentByEmail } from '../repositories/auth.repository.js';
import UserNotFound from '../utils/errors/userNotFound.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';

export const studentLogin = async ({ email, password }) => {
  const student = await findByStudentByEmail(email);
  if (!student) throw new UserNotFound();
  const isMatch = await bcrypt.compare(password, student.hashPassword);
  if (!isMatch) throw new UnAuthorizedException('Invalid email or password');
  return student;
};

export const sample = [];
