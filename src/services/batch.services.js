import { createNewBatch } from '../repositories/batch.repository.js';
import { createFineTable } from '../repositories/fines.repository.js';
import ConflictException from '../utils/errors/conflictException.js';

export const batchCreation = async (createBatchDTO) => {
  try {
    const batch = await createNewBatch({ ...createBatchDTO });
    await createFineTable(batch._id, batch.batchCode);
    return batch;
  } catch (error) {
    if (error.code === 11000) {
      throw new ConflictException('batch already exists');
    }
    throw new Error(error);
  }
};

export const sample = {};
