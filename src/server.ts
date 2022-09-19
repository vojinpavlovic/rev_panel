import 'reflect-metadata';
import { config } from 'dotenv';
import { App } from './Web/application';

// Controllers
import './Web/Controllers/AuthController';

config();
new App().setup();