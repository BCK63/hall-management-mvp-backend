import { compare, hashSync } from 'bcrypt';
import { createNewStudent, findStudentByEmail, findStudentWithPass } from '../repositories/student.repository.js';
import UserNotFound from '../utils/errors/userNotFound.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';
import BadRequest from '../utils/errors/badRequest.js';
import {
  generateAccessToken, generateRefreshToken, getToken, tokenTypes,
} from '../utils/token-util.js';
import { decrypt } from '../utils/encryption-util.js';

export const studentLogin = async ({ email, password }) => {
  const student = await findStudentWithPass(email);
  console.log(student);
  if (!student) throw new UserNotFound();
  const isMatch = await compare(password, student.hashPassword);
  if (!isMatch) throw new UnAuthorizedException('Invalid email or password');
  const accessToken = generateAccessToken(student.email);
  const refreshToken = generateRefreshToken(student.email);
  return { accessToken, refreshToken };
};

export const studentSignup = async (student) => {
  const isExist = await findStudentByEmail(student.email);
  if (isExist) throw new BadRequest('Email already exist with another user');
  const hashPassword = hashSync(student.password, 10);
  const res = await createNewStudent({ ...student, hashPassword, password: null });
  return res;
};

export const refreshToken = async (token) => {
  const decryptedToken = decrypt(token);
  const { tokenType, user } = getToken(decryptedToken);
  const isExist = await findStudentByEmail(user);
  if (!isExist || tokenType !== tokenTypes.REFRESH_TOKEN) throw new UnAuthorizedException('Provided refresh token is invalid');
  return generateAccessToken(isExist.email);
};
