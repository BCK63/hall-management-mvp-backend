import { Router } from 'express';
import * as controller from '../controllers/fine.controller.js';

const router = Router();

router.route('/:batchCode')
  .get(controller.getFineTable)
  .post(controller.assignFine)
  .delete(controller.reduceFine);

export default router;
