import express from 'express';
import logger from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded());

app.get('/', (req, res)=> res.json({success: true}));

export default app;
