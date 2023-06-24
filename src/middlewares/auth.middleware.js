import { findAdminByEmail } from '../repositories/admin.repository.js';
import { findStudentByEmail } from '../repositories/student.repository.js';
import { decrypt } from '../utils/encryption-util.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { getToken, tokenTypes } from '../utils/token-util.js';

export const tokenAuthentication = catchAsync(async (req, res, next) => {
  let tokenFromHeaders = req.headers.authorization;
  if (!tokenFromHeaders) throw new UnAuthorizedException();
  tokenFromHeaders = tokenFromHeaders.replace('Bearer', '').replace(/"/g, '').trim();
  const decryptedToken = decrypt(tokenFromHeaders);
  const verifiedToken = getToken(decryptedToken);
  const user = await findStudentByEmail(verifiedToken.user);
  if (verifiedToken.tokenType !== tokenTypes.ACCESS_TOKEN || !user) {
    throw new UnAuthorizedException();
  }
  req.user = user.email;
  next();
});

export const adminTokenAuthentication = catchAsync(async (req, res, next) => {
  let tokenFromHeaders = req.headers.authorization;
  if (!tokenFromHeaders) throw new UnAuthorizedException();
  tokenFromHeaders = tokenFromHeaders.replace('Bearer', '').replace(/"/g, '').trim();
  const decryptedToken = decrypt(tokenFromHeaders);
  const verifiedToken = getToken(decryptedToken);
  const admin = await findAdminByEmail(verifiedToken.user);
  if (verifiedToken.tokenType !== tokenTypes.ACCESS_TOKEN || !admin) {
    throw new UnAuthorizedException();
  }
  req.admin = admin.email;
  req.admin_name = admin.name;
  next();
});
