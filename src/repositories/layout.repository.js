import layoutModel from '../models/layout.model.js';

export const addNewLayout = async (data) => layoutModel.create(data);

export const getAllLayouts = async () => layoutModel.find();

export const updateLayoutById = async (id, updates) => {
  return layoutModel.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteLayoutById = async (id) => layoutModel.findByIdAndDelete(id);

export const getLayoutById = async (id) => layoutModel.findById(id);
