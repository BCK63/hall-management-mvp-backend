import * as batchServices from '../services/batch.services.js';
import BadRequest from '../utils/errors/badRequest.js';
import catchAsync from '../utils/errors/catchAsync.js';
import schema from '../utils/validations/batch.schema.js';
import { success } from '../utils/responseApi.js';

export const createBatch = catchAsync(async (req, res) => {
  const { batchCode, trainer } = req.body;
  const { error, value } = schema.batchCreationSchema.validate({
    batchCode, trainer,
  });
  if (error) throw new BadRequest(error.message);
  const batch = await batchServices.batchCreation(value);
  res.status(200).json(success('OK', { batch }));
});

export const sample = {};
