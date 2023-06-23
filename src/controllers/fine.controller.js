import * as fineServices from '../services/fines.services.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { success } from '../utils/responseApi.js';

export const getFineTable = catchAsync(async (req, res) => {
  const { batchCode } = req.params;
  // TODO: validation
  const fineTable = await fineServices.getFineTable(batchCode);
  res.json(success('OK', { fineTable }));
});

export const assignFine = catchAsync(async (req, res) => {
  const { assignedTo, assignedBy } = req.body;
  const { batchCode } = req.parms;
  // TODO: validation
  const fineTable = await fineServices.assignFine(batchCode, assignedTo, assignedBy);
  res.json(success('fine assigned', { fineTable }));
});

export const reduceFine = catchAsync(async (req, res) => {
  const { reduceFineOf } = req.body;
  const { batchCode } = req.params;
  // TODO: validation
  const fineTable = await fineServices.reduceFine(batchCode, reduceFineOf);
  res.json(success('fine reduced', { fineTable }));
});
