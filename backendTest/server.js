
import express from 'express';
import { createServer } from 'http';
import wsRouter from './routes.js'; 
import { startWebSocketServer } from './socket.js';  

const app = express();


const server = createServer(app);


app.use(express.json());


app.use('/api', wsRouter);


startWebSocketServer(server);


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
