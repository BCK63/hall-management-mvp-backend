import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import app from '../app.js';

dotenv.config({ path: '.env' });

const server = createServer(app);
const port = process.env.PORT || 3000;

const io = new Server(server);
io.on('connection', () => console.log('connected'));
// app.listen(3000, ()=> console.log('listening on port'));

server.listen(port, () => console.log(`listening on ${port}`));
server.on('error', (err) => console.error(err));
