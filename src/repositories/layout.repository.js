import layoutModel from '../models/layout.model.js';

export const addNewLayout = async (data) => layoutModel.create(data);
export const getAllLayouts = async () => layoutModel.find();
