import { createNewBatch } from '../repositories/batch.repository.js';
import * as fineRepo from '../repositories/fines.repository.js';
import ConflictException from '../utils/errors/conflictException.js';

export const createBatch = async (createBatchDTO) => {
  try {
    const newBatch = await createNewBatch({ ...createBatchDTO });
    await fineRepo.createFineTable(newBatch.batchCode);
    return newBatch;
  } catch (error) {
    if (error.code === 11000) {
      throw new ConflictException('batch already exists');
    }
    throw new Error(error);
  }
};

export const sample = {};
