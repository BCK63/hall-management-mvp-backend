import * as fineServices from '../services/fines.services.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { success } from '../utils/responseApi.js';
import { assignFineSchema, getFineTableSchema, reduceFineSchema } from '../utils/validations/fines.schema.js';
import validate from '../utils/validator.js';

export const getFineTable = catchAsync(async (req, res) => {
  const { batchCode } = req.params;
  const values = validate(getFineTableSchema, { batchCode });
  const fineTable = await fineServices.getFineTable(values.batchCode);
  res.json(success('OK', { fineTable }));
});

export const assignFine = catchAsync(async (req, res) => {
  const { assignedTo, assignedBy } = req.body;
  const { batchCode } = req.params;
  const values = validate(assignFineSchema, { batchCode, assignedBy, assignedTo });
  const fineTable = await fineServices.assignFine(
    values.batchCode,
    values.assignedTo,
    values.assignedBy,
  );
  res.json(success('fine assigned', { fineTable }));
});

export const reduceFine = catchAsync(async (req, res) => {
  const { reduceFineOf } = req.body;
  const { batchCode } = req.params;
  const values = validate(reduceFineSchema, { reduceFineOf, batchCode });
  const fineTable = await fineServices.reduceFine(values.batchCode, values.reduceFineOf);
  res.json(success('fine reduced', { fineTable }));
});
