import { Router } from 'express';
import * as ctrl from '../controllers/layout.controller.js';

const router = Router();

router
  .route('/')
  .post(ctrl.createLayout)
  .get(ctrl.getAllLayouts);

router
  .route('/:layoutId')
  .get(ctrl.getLayout) // after development need to evaluate the existence of this route.
  .put(ctrl.updateLayout)
  .delete(ctrl.deleteLayout);

router.patch('/:layoutId/activate', ctrl.changeActiveLayout);

export default router;
