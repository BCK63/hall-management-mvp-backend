import tempAdminSchema from '../models/temp.admin.model.js';

export const findTempAdminByEmail = async ({ email }) => tempAdminSchema.findOne({ email });
export const createTempAdmin = async ({ email, inviteToken }) => tempAdminSchema.create(
  { email, inviteToken },
);

export const updateTempAdmin = async ({ email, name, hashPassword }) => tempAdminSchema.updateOne({ email }, { $set: { hashPassword, name } });
export const getAllTempAdmin = async () => tempAdminSchema.find({ status: 'PENDING' });
