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
  assignedTo: Joi.string().required().length(24).messages({
    'any.required': 'assignedTo field is required',
    'string.length': 'Provided id is not valid for assignedTo field',
  }),
  assignedBy: Joi.string().required().length(24).messages({
    'any.required': 'assignedBy field is required',
    'string.length': 'Provided id is not valid for assignedBy field',
  }),
});

const reduceFineSchema = Joi.object({
  batchCode: Joi.string().required().min(5).messages({
    'any.required': 'params batchCode is required',
    'string.min': 'Batch code should be at least 5 characters long',
  }),
  reduceFineOf: Joi.string().required().length(24).messages({
    'any.required': 'reduceFineOf field is required',
    'string.length': 'Provided id is not valid for reduceFineOf field',
  }),
});

export { getFineTableSchema, assignFineSchema, reduceFineSchema };
