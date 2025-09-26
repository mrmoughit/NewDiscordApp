
import { WebSocketServer } from 'ws';


export const connectedClients = new Map();


export const startWebSocketServer = (server) => {
    const wss = new WebSocketServer({ server });

    wss.on('connection', (ws) => {
        console.log('New client connected');


        ws.on('message', (message) => {
            const username = message.toString();  
            connectedClients.set(username, ws);  
            console.log(`${username} connected`);
        });


        ws.on('close', () => {
            for (let [username, socket] of connectedClients.entries()) {
                if (socket === ws) {
                    connectedClients.delete(username); 
                    console.log(`${username} disconnected`);
                    break;
                }
            }
        });
    });
};
