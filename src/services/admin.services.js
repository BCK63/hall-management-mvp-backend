import { createAdmin } from '../repositories/admin.repository.js';
import {
  deleteTempAdmin, findTempAdminWithPass, getTempAdminByStatus, updateTempAdminStatus,
} from '../repositories/temp.admin.repository.js';
import generateEmail from '../utils/email-config.js';
import BadRequest from '../utils/errors/badRequest.js';

export const pendingAdminList = async () => {
  const allPendings = await getTempAdminByStatus('PENDING');
  return allPendings;
};

export const approveAdminService = async (tempEmail, admin) => {
  const isExist = await findTempAdminWithPass(tempEmail);
  if (!isExist) {
    throw new BadRequest('No user associated with the email');
  }
  const { name, email, hashPassword } = isExist;
  await createAdmin(name, email, hashPassword);
  await deleteTempAdmin(email);
  await generateEmail(
    email,
    `Congratulations! You are now a part of ${process.env.APP_NAME} administration`,
    `Hello ${name}, Your request for becoming an ${process.env.APP_NAME} admin has been appproved by ${admin}`,
  );
};

export const rejectAdminService = async (tempAdmin) => {
  await updateTempAdminStatus(tempAdmin, 'REJECTED');
  await generateEmail(
    tempAdmin,
    `Rejected! Your request to become an admin at ${process.env.APP_NAME} has been rejected`,
    `Your request for becoming an  ${process.env.APP_NAME} has been rejected and your email has been blocked.`,
  );
};
