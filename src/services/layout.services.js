import * as layoutRepo from '../repositories/layout.repository.js';

export const addNewLayout = async (name, slots) => layoutRepo.addNewLayout({ name, slots });
export const sample = {};
