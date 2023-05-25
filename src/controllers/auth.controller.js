import { studentLogin } from '../services/auth.services.js';
import BadRequest from '../utils/errors/badRequest.js';
import catchAsync from '../utils/errors/catchAsync.js';
import ok from '../utils/responses/ok.js';
import schema from '../utils/validations/login.schema.js';

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const { error, value } = schema.loginSchema.validate({ email, password });
  if (error) throw new BadRequest(error.details[0].message);
  const student = await studentLogin(value);
  ok(res, 'login successful', student);
});

export const signup = {};
