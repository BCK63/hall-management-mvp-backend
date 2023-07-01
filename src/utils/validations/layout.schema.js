import Joi from 'joi';

const changeActiveLayoutSchema = Joi.object({
  layoutId: Joi.string().length(24).required().messages({
    'string.length': 'Provide a valid id',
  }),
});

const sample = [];

export { changeActiveLayoutSchema, sample };
