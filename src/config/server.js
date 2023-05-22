import dotenv from 'dotenv';
import {createServer} from 'http';
import app from '../app.js';
import {Server} from 'socket.io';

dotenv.config({ path: '.env' });

const server = createServer(app);
const port = process.env.PORT || 3000;

const io = new Server(server);
io.on('connection', (socket)=> console.log('connected'));
// app.listen(3000, ()=> console.log('listening on port'));

server.listen(port, () => console.log(`listening on ${port}`));
server.on('error', (err) => console.error(err));
