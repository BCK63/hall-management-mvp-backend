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

  signupSchema: Joi.object({
    name: Joi.string().trim().required().messages({
      'any.required': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
    }),
    batch: Joi.string().required().messages({
      'any.required': 'Batch is required',
    }),
    password: Joi.string().min(4).required().messages({
      'any.required': 'Password is required',
    }),
  }),

  adminInviteSchema: Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': 'Invitation Email is required',
    }),
  }),
  adminSignupSchema: Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(4).message({
      'any.required': 'Password is required',
    }),
    name: Joi.string().required().messages({
      'any.required': 'Name is required',
    }),
    token: Joi.string().required().messages({
      'any.required': 'Invitation token is required',
    }),
  }),

};

export default schema;
