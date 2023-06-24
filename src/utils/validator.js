import BadRequest from './errors/badRequest.js';

export default function validate(schema, values) {
  const { error, value } = schema.validate(values);
  if (error) throw new BadRequest(error.message);
  return value;
}
