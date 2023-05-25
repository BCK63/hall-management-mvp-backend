import { Router } from 'express';
import { login } from '../controllers/student.controller';

const router = Router();

router.post('/login', login);
router.post('/register');

export default router;
