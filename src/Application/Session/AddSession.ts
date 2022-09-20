import { Application } from 'express';
import session from "express-session";

import RedisService from "../../Infrastructure/Services/RedisService";
import sessionConfig from '../Configuration/Session';

export default (app: Application) => app.use(session(sessionConfig(RedisService.getStore(session)))); 
