
import express from 'express';
import { connectedClients } from './socket.js'; 

const router = express.Router();



router.post('/send-message', (req, res) => {

    const { username, message } = req.body;


    console.log(username , message);
    
    if (!username || !message) {
        return res.status(400).json({ error: 'Username and message are required' });
    }

    const socket = connectedClients.get(username);  

    if (socket) {

        socket.send(
            JSON.stringify({
                type: 'message',
                data: { message }
            })
        );
        return res.status(200).json({ success: `Message sent to ${username}` });
    } else {
        return res.status(404).json({ error: `User ${username} is not connected` });
    }
});


router.get('/connected-users', (req, res) => {
    const users = Array.from(connectedClients.keys()); 
    return res.status(200).json({ connectedUsers: users });
});

export default router;
