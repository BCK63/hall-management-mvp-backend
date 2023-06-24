import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { findAdminByEmail, findAdminWithPassword } from '../repositories/admin.repository.js';
import { findTempAdminByEmail, createTempAdmin, updateTempAdmin } from '../repositories/temp.admin.repository.js';
import generateEmail from '../utils/email-config.js';
import BadRequest from '../utils/errors/badRequest.js';
import { generateAccessToken, generateRefreshToken } from '../utils/token-util.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';

export const adminInvite = async (email, admin) => {
  const isExist = await findAdminByEmail(email);
  const isTempAdminExist = await findTempAdminByEmail(email);
  if (isExist || isTempAdminExist) {
    throw new BadRequest('Email already exist with another admin');
  }
  const inviteToken = crypto.randomBytes(64).toString('hex');
  await createTempAdmin({ email, inviteToken });
  await generateEmail(email, 'x has been invited you to become a brospeaks admin', `this will be a sample message that will be sent to the user ${inviteToken} by ${admin}`);
};

export const adminLoginService = async (email, password) => {
  const isExist = await findAdminWithPassword(email);
  if (!isExist) throw new UnAuthorizedException('Email not found');
  const decryptPass = await bcrypt.compare(password, isExist.hashPassword);
  if (!decryptPass) throw new UnAuthorizedException('Invalid Email or Password');
  const accessToken = generateAccessToken(email);
  const refreshToken = generateRefreshToken(email);
  return { accessToken, refreshToken };
};

export const adminSignupService = async ({
  name, email, password, token,
}) => {
  const isExist = await findTempAdminByEmail(email);
  if (!isExist) throw new BadRequest('User not found try again...');
  if (token !== isExist.inviteToken) throw new BadRequest('Invalid invite request, Please try again...');
  const hashPassword = await bcrypt.hash(password, 10);
  await updateTempAdmin(email, name, hashPassword);
};
