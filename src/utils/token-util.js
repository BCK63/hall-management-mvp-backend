import Jwt from 'jsonwebtoken';
import { encrypt } from './encryption-util.js';

export const tokenTypes = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
};

const generateToken = (user, tokenType) => {
  const secret = process.env.JWT_SECRET;
  const expiresIn = tokenType === 'access_token' ? process.env.ACCESS_TOKEN_EXP : process.env.REFRESH_TOKEN_EXP;
  const token = Jwt.sign({ tokenType, user }, secret, {
    expiresIn,
  });
  return `Bearer ${encrypt(token)}`;
};

export const generateAccessToken = (user) => {
  return generateToken(user, tokenTypes.ACCESS_TOKEN);
};

export const generateRefreshToken = (user) => {
  return generateToken(user, tokenTypes.REFRESH_TOKEN);
};

export const getToken = (token) => {
  return (Jwt.verify(token, process.env.JWT_SECRET));
};
