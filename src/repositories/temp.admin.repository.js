import tempAdminSchema from '../models/temp.admin.model.js';

export const findTempAdminByEmail = async (email) => tempAdminSchema.findOne({ email });
export const findTempAdminWithPass = async (email) => tempAdminSchema.findOne({ email }).select('+hashPassword');
export const createTempAdmin = async ({ email, inviteToken }) => tempAdminSchema.create(
  { email, inviteToken },
);

export const updateTempAdmin = async (email, name, hashPassword) => tempAdminSchema.updateOne({ email }, { $set: { hashPassword, name }, $unset: { inviteToken: null } });
export const getTempAdminByStatus = async (status) => tempAdminSchema.find({ status });
export const updateTempAdminStatus = async (email, status) => tempAdminSchema.findOneAndUpdate({ email }, { $set: { status } });
export const deleteTempAdmin = async (email) => tempAdminSchema.findOneAndDelete({ email });
