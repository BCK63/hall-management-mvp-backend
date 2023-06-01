import { Router } from 'express';
import * as ctrl from '../controllers/layout.controller.js';

const router = Router();

router
  .route('/')
  .post(ctrl.createLayout)
  .get(ctrl.getAllLayouts);

router
  .route('/:layoutId')
  .get(ctrl.getLayout)
  .put(ctrl.updateLayout)
  .delete(ctrl.deleteLayout);

export default router;
