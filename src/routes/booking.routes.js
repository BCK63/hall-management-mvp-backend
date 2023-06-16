import { Router } from 'express';

import * as controller from '../controllers/booking.controller.js';

const router = Router();

router
  .route('/')
  .post(controller.Booking)
  .get(controller.AllBookings);

router
  .route('/:bookingId')
  .get(controller.BookingById)
  .delete(controller.deleteBooking);

export default router;
