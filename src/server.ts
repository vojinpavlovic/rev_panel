import "reflect-metadata";
import { config } from "dotenv";
config();

import express from "express";
import session from "express-session";
import cors from 'cors';

import { sessionConfig } from "./config/Session";
import { SteamOAuth } from "./Infrastructure/Services/SteamOAuth";

import router from './Web/Router'

const app = express();
const port = parseInt(<string>process.env.PORT ?? 3000);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

const steamOAuth = new SteamOAuth().setup();
app.use(steamOAuth.initialize());
app.use(steamOAuth.session());

router(app);

app.listen(port, () => console.log([`🚀 Listening on http://localhost:${port}`]));
