import express from 'express';
import { createServer } from 'http';
import wsRouter from './routes.js';  // Assuming you define WebSocket routes in this file
import { startWebSocketServer } from './socket.js';  
import passport from 'passport';
import axios from 'axios';
import OAuth2Strategy from 'passport-oauth2';
import session from 'express-session';
import cors from 'cors';
import { pool } from './db.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const server = createServer(app);


app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));
app.use(session({
    secret: 'abechcha',
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', wsRouter); 


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use('42', new OAuth2Strategy({
  authorizationURL: 'https://api.intra.42.fr/oauth/authorize',
  tokenURL: 'https://api.intra.42.fr/oauth/token',
  clientID: process.env.UID,
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACK, 
}, async (accessToken, refreshToken, profile, cb) => {
    try {
        cb(null, { accessToken, profile });
    } catch (err) {
        console.error('OAuth2 Strategy Error:', err);
        cb(err, null);
    }
}));

// Checking if a user is allowed
export async function is_allowed(login) {
    try {
        const [rows] = await pool.query('SELECT * FROM allowed_users WHERE name = ?', [login]);
        if (rows.length > 0) {
            return 1;  // User is allowed
        } else {
            await pool.query('INSERT INTO catched (login) VALUES (?)', [login]);
            return 0;  // User is not allowed
        }
    } catch (error) {
        console.error("Error in is_allowed:", error);
        return 0;  // Default to 0 in case of error
    }
}

// Add new user or update user data in the database
export async function getdata(login, img) {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE login = ?', [login]);
        if (rows.length <= 0) {
            const query = 'INSERT INTO users (img, `call`, slot, discord_id, login) VALUES (?, 1, 1, 222, ?)';
            await pool.query(query, [img, login]);
        }
    } catch (error) {
        console.error('Error checking or adding user:', error);
    }
}

// Authentication Routes
app.get('/auth/42',
    passport.authenticate('42', { scope: 'public' })
);

app.get('/callback',
    passport.authenticate('42', { failureRedirect: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }),
    async (req, res) => {
        let login;
        const accessToken = req.user.accessToken;

        try {
            // Fetch user data from 42 API
            const data = await axios.get('https://api.intra.42.fr/v2/me', {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });

            login = data.data.login;
            const img = data.data.image.link;

            // Log login and img for debugging
            console.log('User login:', login);
            console.log('User image link:', img);

            // Check if the user is allowed
            const allowed = await is_allowed(login);
            if (allowed === 0) {
                return res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            }

            // Fetch additional data (if needed)
            await getdata(login, img);
        } catch (error) {
            console.error('Error fetching data:', error);
            return res.status(500).send('Authentication failed.');
        }

        // Create a JWT token and save it to the user
        const payload = { login };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

        try {
            const query = `UPDATE users SET token_intra = ?, token_2 = ? WHERE login = ?`;
            await pool.query(query, [token, accessToken, login]);

            // Redirect user to the frontend with the token
            res.redirect(`http://${process.env._IP}:80/?code=${token}`);
        } catch (err) {
            console.error("Error saving user data:", err);
            return res.status(500).send('Error saving user data.');
        }
    }
);

// Start WebSocket Server
startWebSocketServer(server);

// Start Express Server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
