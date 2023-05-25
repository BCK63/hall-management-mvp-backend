const Joi = require('joi');

module.exports = {
  loginSchema: Joi.object({
    email: Joi.string().email().alphanum().required(),
    password: Joi.string().min(4).required(),
  }),

};
