import Joi from 'joi';

const schema = {
  batchCreationSchema: Joi.object({
    batchCode: Joi.string().required().messages({
      'string.empty': 'Batch code is required',
      'any.required': 'Batch code is required',
    }),
    trainer: Joi.string().required().messages({
      'string.empty': 'Trainer is required',
      'any.required': 'Trainer is required',
    }),
  }),
};

export default schema;
