import { Router } from 'express';

const router = Router();

router.route('/:batch')
  .get()
  .post()
  .delete();

export default router;
