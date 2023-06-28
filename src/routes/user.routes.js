import { Router } from 'express';
import { tokenAuthentication } from '../middlewares/auth.middleware.js';

const router = Router();
router.use(tokenAuthentication);

router.get('/', (req, res) => {
  res.status(200).json('Authenticated');
});

export default router;
