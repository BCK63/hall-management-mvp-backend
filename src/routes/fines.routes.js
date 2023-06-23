import { Router } from 'express';
import * as controller from '../controllers/fine.controller';

const router = Router();

router.route('/:batch')
  .get(controller.getFineTable)
  .post(controller.assignFine)
  .delete(controller.reduceFine);

export default router;
