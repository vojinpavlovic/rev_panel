import { Application } from 'express';
import session from "express-session";

import RedisService from "../../Infrastructure/Services/RedisService";
import sessionConfig from '../Configuration/Session';

const service = new RedisService();

export default (app: Application) => 
    app.use(session(sessionConfig(service.getStore(session)))); 
