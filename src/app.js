import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import adminRoutes from './routes/admin.routes.js';
import layoutRoutes from './routes/layout.routes.js';
import batchRoutes from './routes/batch.routes.js';
import userRoutes from './routes/user.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import finesRoutes from './routes/fines.routes.js';
import globalErrorHandler from './utils/errors/globalError.js';
import NotFound from './utils/errors/404.js';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ success: true }));
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/layouts', layoutRoutes);
app.use('/api/v1/batches', batchRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/fines', finesRoutes);

app.use('*', NotFound);

app.use(globalErrorHandler);

export default app;
