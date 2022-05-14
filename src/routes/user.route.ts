import { Router } from 'express';
import login from '../controllers/user.controller';

const router = Router();

router.post(
  '/',
  login.userLogin,
);

router.get(
  '/validate',
  login.validation,
);

export default router;