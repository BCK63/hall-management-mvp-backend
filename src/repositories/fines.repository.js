import FinesModel from '../models/fines.model.js';

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
