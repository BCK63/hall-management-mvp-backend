import { Router } from 'express';
import * as ctrl from '../controllers/layout.controller.js';

const router = Router();

router.post('/', ctrl.createLayout);

export default router;
