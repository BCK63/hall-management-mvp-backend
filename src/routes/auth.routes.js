import { Router } from 'express';
import * as controller from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', controller.login);
router.post('/signup', controller.signup);
router.post('/refresh', controller.tokenRefresh);

router.post('/admin/login', controller.adminLogin);
export default router;
