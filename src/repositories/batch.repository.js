import batchesModel from '../models/batches.model.js';

export const findByBatchCode = async (batchCode) => batchesModel.findOne({ batchCode });
export const createNewBatch = async (batch) => batchesModel.create(batch);
