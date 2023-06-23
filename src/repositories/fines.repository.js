import FinesModel from '../models/fines.model.js';
import NotFoundException from '../utils/errors/NotFoundError.js';
import UserNotFound from '../utils/errors/userNotFound.js';

export const createFineTable = (batchCode) => {
  return FinesModel.create({ batchCode, fines: [] });
};

export const addStudentToFineTable = (batchCode, studentId) => {
  return FinesModel.findOneAndUpdate(
    {
      batchCode,
    },
    {
      $addToSet: {
        fines: {
          studentId, fine: 0, commission: 0, lastAssignedBy: [],
        },
      },
    },
    { new: true },
  );
};

export const getFineTableByBatchCode = (batchCode) => {
  return FinesModel.findOne({ batchCode });
};

export const assignFine = async (batchCode, assignedTo, assignedBy) => {
  return FinesModel.findOneAndUpdate(
    { batchCode },
    {
      $inc: { 'fines.$[assignedBy].commission': 5, 'fines.$[assignedTo].fine': 10 },
      $push: { 'fines.$[assignedTo].lastAssignedBy': assignedBy },
    },
    { arrayFilters: [{ 'assignedBy.studentId': assignedBy }, { 'assignedTo.studentId': assignedTo }] },
    { new: true },
  );
};

export const reduceFine = async (batchCode, reduceFineOf) => {
  const session = await FinesModel.startSession();
  session.startTransaction();

  try {
    const updatedFineTable = await FinesModel.findOneAndUpdate(
      { batchCode, 'fines.studentId': reduceFineOf },
      {
        $inc: {
          'fines.$.fine': -10,
        },
      },
      { new: true, session },
    );

    if (!updatedFineTable) {
      throw new NotFoundException('Fine table not found');
    }

    const fineEntry = updatedFineTable.fines.find(fine => fine.studentId === reduceFineOf);
    if (!fineEntry) {
      throw new UserNotFound('Student not found');
    }

    const lastAssignedBy = fineEntry.lastAssignedBy.pop();
    if (!lastAssignedBy) {
      throw new Error('Can only reduce maximum number of three times');
    }

    const updatedCommissionTable = await FinesModel.findOneAndUpdate(
      { batchCode, 'fines.studentId': lastAssignedBy },
      {
        $inc: {
          'fines.$.commission': -5,
        },
      },
      { new: true, session },
    );

    if (!updatedCommissionTable) {
      throw new UserNotFound('Last assignee not found');
    }

    await session.commitTransaction();
    return updatedCommissionTable;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};
