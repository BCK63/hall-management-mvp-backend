import * as fineRepo from '../repositories/fines.repository.js';

export const getFineTable = async (batchCode) => fineRepo.getFineTableByBatchCode(batchCode);

export const assignFine = async (batchCode, assignedTo, assignedBy) => {
  return fineRepo.assignFine(batchCode, assignedTo, assignedBy);
};

export const reduceFine = async (batchCode, reduceFineOf) => {
  return fineRepo.reduceFine(batchCode, reduceFineOf);
};
