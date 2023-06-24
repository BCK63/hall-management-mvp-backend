import FinesModel from '../models/fines.model.js';

export const createFineTable = (batchCode) => {
  return FinesModel.create({ batchCode, fines: [] });
};

export const addStudentToFineTable = (batchCode, studentId, studentName) => {
  return FinesModel.findOneAndUpdate(
    {
      batchCode,
    },
    {
      $addToSet: {
        fines: {
          studentName, studentId, fine: 0, commission: 0, lastAssignedBy: null,
        },
      },
    },
    { new: true },
  );
};

export const getFineTableByBatchCode = async (batchCode) => {
  return FinesModel.findOne({ batchCode });
};

export const assignFine = async (batchCode, assignedTo, assignedBy) => {
  return FinesModel.findOneAndUpdate(
    { batchCode },
    {
      $inc: { 'fines.$[assignedBy].commission': 5, 'fines.$[assignedTo].fine': 10 },
      $set: { 'fines.$[assignedTo].lastAssignedBy': assignedBy },
    },
    { arrayFilters: [{ 'assignedBy.studentId': assignedBy }, { 'assignedTo.studentId': assignedTo }], new: true },
  );
};

export const getToReduceFineEntry = async (batchCode, reduceFineOf) => {
  return FinesModel.findOne(
    { batchCode, 'fines.studentId': reduceFineOf },
    { 'fines.$': 1 },
  );
};

export const reduceFineAndCommission = async (batchCode, reduceFineOf, reduceCommissionOf) => {
  return FinesModel.findOneAndUpdate(
    { batchCode },
    {
      $inc: { 'fines.$[ofFine].fine': -10, 'fines.$[ofCommission].commission': -5 },
      $set: { 'fines.$[ofFine].lastAssignedBy': null },
    },
    { arrayFilters: [{ 'ofFine.studentId': reduceFineOf }, { 'ofCommission.studentId': reduceCommissionOf }], new: true },
  );
};
