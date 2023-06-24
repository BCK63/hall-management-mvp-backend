import * as fineRepo from '../repositories/fines.repository.js';
import NotFoundException from '../utils/errors/NotFoundError.js';
import ForbiddenException from '../utils/errors/forbidden.js';

export const getFineTable = async (batchCode) => fineRepo.getFineTableByBatchCode(batchCode);

export const assignFine = async (batchCode, assignedTo, assignedBy) => {
  return fineRepo.assignFine(batchCode, assignedTo, assignedBy);
};

export const reduceFine = async (batchCode, reduceFineOf) => {
  const fineEntry = await fineRepo.getToReduceFineEntry(batchCode, reduceFineOf);
  if (!fineEntry) throw new NotFoundException('student entry not found');
  const { fine, lastAssignedBy, studentId } = fineEntry.fines[0];
  if (fine === 0) throw new ForbiddenException('Can\'t reduce fine for if the student has no fine');
  if (!lastAssignedBy) throw new ForbiddenException('Can only reduce one time in a row');
  return fineRepo.reduceFineAndCommission(batchCode, studentId, lastAssignedBy);
};
