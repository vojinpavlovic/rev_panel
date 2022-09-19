import { config } from "dotenv";
config();

import express from "express";
import session from "express-session";
import cors from 'cors';
import { sessionConfig } from "./config/Session";
import { SteamOAuth } from "./SteamOAuth";


const app = express();
const steamOAuth = new SteamOAuth();
const passport = steamOAuth.setup();
const port = parseInt(<string>process.env.PORT ?? 3000);

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req: any, res) => {
    res.send(req.user);
});

app.get('/api/auth/steam', steamOAuth.authenticate(), (req, res) => {
    res.redirect('/');
});
   
app.get('/api/auth/steam/return', steamOAuth.authenticate(), (req, res) => {
   res.redirect('/');
});

app.listen(port, () => console.log([`Listening on http://localhost:${port}`]));