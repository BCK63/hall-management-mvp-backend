import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded());

app.get('/', (req, res) => res.json({ success: true }));
app.use('/api/v1/auth', authRoutes);

export default app;
