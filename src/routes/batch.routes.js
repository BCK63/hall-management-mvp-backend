import { Router } from 'express';
import * as controller from '../controllers/batch.controller.js';

const router = Router();

router.post('/', controller.createBatch);

export default router;
