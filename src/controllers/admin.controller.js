import { adminInvite } from '../services/admin.auth.services.js';
import { pendingAdminList } from '../services/admin.services.js';
import BadRequest from '../utils/errors/badRequest.js';
import catchAsync from '../utils/errors/catchAsync.js';
import { success } from '../utils/responseApi.js';
import schema from '../utils/validations/auth.schema.js';

export const inviteAdmin = catchAsync(async (req, res) => {
  const { email } = req.body;
  const { error, value } = schema.adminInviteSchema.validate({ email });
  if (error) throw new BadRequest(error.details[0].message);
  await adminInvite(value.email, req.admin);
  res.status(200).json(success('ok', value));
});

export const allPendingAdmin = catchAsync(async (req, res) => {
  const allTempAdmin = await pendingAdminList();
  res.status(200).json(success('OK', allTempAdmin));
});
