import { createNewBatch } from '../repositories/batch.repository.js';
import ConflictException from '../utils/errors/conflictException.js';

export const batchCreation = async (batch) => {
  try {
    const response = await createNewBatch({ ...batch });
    return response;
  } catch (error) {
    if (error.code === 11000) {
      throw new ConflictException('batch already exists');
    }
    throw new Error(error);
  }
};

export const sample = {};
