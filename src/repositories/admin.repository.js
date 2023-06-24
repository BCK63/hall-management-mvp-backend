import adminsModel from '../models/admins.model.js';

export const findAdminByEmail = async (email) => adminsModel.findOne({ email });
export const findAdminWithPassword = async (email) => adminsModel.findOne({ email }).select('hashPassword');
