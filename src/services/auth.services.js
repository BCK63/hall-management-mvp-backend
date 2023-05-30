import { compare, hashSync } from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { createNewStudent, findStudentByEmail } from '../repositories/student.repository.js';
import UserNotFound from '../utils/errors/userNotFound.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';
import BadRequest from '../utils/errors/badRequest.js';

export const studentLogin = async ({ email, password }) => {
  const student = await findStudentByEmail(email);
  if (!student) throw new UserNotFound();
  const isMatch = await compare(password, student.hashPassword);
  if (!isMatch) throw new UnAuthorizedException('Invalid email or password');
  // generating jwt token and passing payload
  const token = Jwt.sign(
    { user_email: email, isLeader: student.isLeader },
    process.env.JWT_SECRET,
    { expiresIn: process.env.TOKEN_EXP },
  );
  return `Bearer ${token}`;
};

export const studentSignup = async (student) => {
  const isExist = await findStudentByEmail(student.email);
  if (isExist) throw new BadRequest('Email already exist with another user');
  const hashPassword = hashSync(student.password, 10);
  const res = await createNewStudent({ ...student, hashPassword, password: null });
  return res;
};
