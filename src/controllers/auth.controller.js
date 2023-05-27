import { studentLogin, studentSignup } from '../services/auth.services.js';
import BadRequest from '../utils/errors/badRequest.js';
import catchAsync from '../utils/errors/catchAsync.js';
import ok from '../utils/responses/ok.js';
import schema from '../utils/validations/auth.schema.js';

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const { error, value } = schema.loginSchema.validate({ email, password });
  if (error) throw new BadRequest(error.details[0].message);
  const token = await studentLogin(value);
  ok(res, 'login successful', token);
});

export const signup = catchAsync(async (req, res) => {
  const {
    name, email, password, batch,
  } = req.body;
  const { error, value } = schema.signupSchema.validate({
    name, email, password, batch,
  });
  if (error) throw new BadRequest(error.message);
  const student = await studentSignup(value);
  ok(res, 'signup successfull', student);
});
