import { findStudentByEmail } from '../repositories/student.repository.js';
import { decrypt } from '../utils/encryption-util.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { getToken, tokenTypes } from '../utils/token-util.js';

const tokenAuthentication = catchAsync(async (req, res, next) => {
  const tokenFromHeaders = req.headers.authorization.replace('Bearer', '').replace(/"/g, '').trim();
  const decryptedToken = decrypt(tokenFromHeaders);
  const verifiedToken = getToken(decryptedToken);
  const user = await findStudentByEmail(verifiedToken.user);
  if (verifiedToken.tokenType !== tokenTypes.ACCESS_TOKEN || !user) {
    throw new UnAuthorizedException();
  }
  req.user = user.email;
  next();
});

export default tokenAuthentication;
