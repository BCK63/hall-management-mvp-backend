import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import app from '../app.js';
import connectDb from './db.js';

dotenv.config({ path: '.env' });

connectDb().then(() => {
  const server = createServer(app);
  const port = process.env.PORT || 3000;

  const io = new Server(server);
  io.on('connection', () => console.log('connected'));

  server.listen(port, () => console.log(`listening on ${port}`));
  server.on('error', (err) => console.error(err));
}).catch(console.log);
