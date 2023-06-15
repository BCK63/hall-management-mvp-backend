import finesModel from '../models/fines.model.js';

export const createFineTable = (batchId, batchCode) => {
  return finesModel.create({ _id: batchId, batchCode, fines: [] });
};

export const sample = {};
