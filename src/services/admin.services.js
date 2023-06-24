import { getAllTempAdmin } from '../repositories/temp.admin.repository.js';

export const pendingAdminList = async () => {
  const allPendings = await getAllTempAdmin();
  return allPendings;
};

export const reject = {};
