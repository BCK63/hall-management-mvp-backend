import { Router } from 'express';

const router = Router();

router.get('/:batch');
router.post('/:batch');
router.delete('/:batch');

export default router;
