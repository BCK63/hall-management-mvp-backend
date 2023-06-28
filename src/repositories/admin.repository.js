import adminsModel from '../models/admins.model.js';

export const findAdminByEmail = async (email) => adminsModel.findOne({ email });
export const findAdminWithPassword = async (email) => adminsModel.findOne({ email }).select('hashPassword');
export const createAdmin = async (name, email, hashPassword) => adminsModel.create({ name, email, hashPassword });
