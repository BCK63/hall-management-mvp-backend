import { Router } from 'express';
import * as controller from '../controllers/admin.controller.js';
import { adminTokenAuthentication } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(adminTokenAuthentication);

router.get('/pending', controller.allPendingAdmin);

router.post('/invite', controller.inviteAdmin);

// isPendingApproval
// admin token auth middleware

export default router;
