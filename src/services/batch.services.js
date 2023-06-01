import { createNewBatch } from '../repositories/batch.repository.js';

export const batchCreation = async (batch) => {
  try {
    const response = await createNewBatch({ ...batch });
    return response;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('batch already exists');
    }
    throw new Error(error);
  }
};

export const sample = {};
