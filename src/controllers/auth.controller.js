import { adminLoginService, adminSignupService } from '../services/admin.auth.services.js';
import { refreshToken, studentLogin, studentSignup } from '../services/auth.services.js';
import UnAuthorizedException from '../utils/errors/UnAuthorized.js';
import BadRequest from '../utils/errors/badRequest.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { success } from '../utils/responseApi.js';
import schema from '../utils/validations/auth.schema.js';

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const { error, value } = schema.loginSchema.validate({ email, password });
  if (error) throw new BadRequest(error.details[0].message);
  const token = await studentLogin(value);
  res.status(200).json(success('OK', { token }));
});

export const signup = catchAsync(async (req, res) => {
  const {
    name, email, password, batch,
  } = req.body;
  const { error, value } = schema.signupSchema.validate({
    name, email, password, batch,
  });
  if (error) throw new BadRequest(error.message);
  const newStudent = await studentSignup(value);
  res.status(201).json(success('CREATED', { newStudent }));
});

export const tokenRefresh = catchAsync(async (req, res) => {
  let refreshTokenFromHeaders = req.headers.authorization;
  if (!refreshTokenFromHeaders) throw new UnAuthorizedException();
  refreshTokenFromHeaders = refreshTokenFromHeaders.replace('Bearer', '').replace(/"/g, '').trim();
  const token = await refreshToken(refreshTokenFromHeaders);
  res.status(200).json(success('OK', { token }));
});

// Admin Authentication

export const adminLogin = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const adminTokens = await adminLoginService(email, password);
  res.status(200).json(success('OK', adminTokens));
});

export const adminSignup = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const { error } = schema.adminSignupSchema.validate({ name, email, password });
  if (error) throw new BadRequest(error.message);
  await adminSignupService(req.body);
  res.status(200).json(success('OK'));
});
