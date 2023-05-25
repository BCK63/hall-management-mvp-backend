import Joi from 'joi';

const schema = {
  loginSchema: Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(4).required().messages({
      'any.required': 'Password is required',
    }),
  }),

};

export default schema;
