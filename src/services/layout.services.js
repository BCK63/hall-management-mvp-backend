import * as layoutRepo from '../repositories/layout.repository.js';

export const addNewLayout = async (name, slots) => layoutRepo.addNewLayout({ name, slots });

export const getAllLayouts = async () => layoutRepo.getAllLayouts();

export const updateLayout = async (id, name, slots) => {
  return layoutRepo.updateLayoutById(id, { name, slots });
};

export const deleteLayout = async (id) => layoutRepo.deleteLayoutById(id);

export const getLayout = async (id) => layoutRepo.getLayoutById(id);
