import Joi from 'joi';

const getFineTableSchema = Joi.object({
  batchCode: Joi.string().required().min(5).messages({
    'any.required': 'params batchCode is required',
    'string.min': 'Batch code should be at least 5 characters long',
  }),
});

const assignFineSchema = Joi.object({
  batchCode: Joi.string().required().min(5).messages({
    'any.required': 'params batchCode is required',
    'string.min': 'Batch code should be at least 5 characters long',
  }),
  assignedTo: Joi.string().required().messages({
    'any.required': 'assignedTo field is required',
  }),
  assignedBy: Joi.string().required().messages({
    'any.required': 'assignedBy field is required',
  }),
});

const reduceFineSchema = Joi.object({
  batchCode: Joi.string().required().min(5).messages({
    'any.required': 'params batchCode is required',
    'string.min': 'Batch code should be at least 5 characters long',
  }),
  reduceFineOf: Joi.string().required().messages({
    'any.required': 'reduceFineOf field is required',
  }),
});

export { getFineTableSchema, assignFineSchema, reduceFineSchema };

export const sample = {};
