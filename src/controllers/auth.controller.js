import { loginRepository } from '../repositories/auth.repository.js';
import BadRequest from '../utils/errors/badRequest.js';
import catchAsync from '../utils/errors/catchAsync.js';
import schema from '../utils/validations/login.schema.js';

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const { error, value } = schema.loginSchema.validate({ email, password });
  if (error) throw new BadRequest(error.details[0].message);
  await loginRepository(value);
  res.status(200).json({ message: 'Login Successfull' });
});

export const signup = {};
