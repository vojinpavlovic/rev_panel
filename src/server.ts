import "reflect-metadata";
import { config } from "dotenv";
config();

import RedisService from './Infrastructure/Services/RedisService';
import { Http } from "./Web/http";


RedisService.setup()
new Http().setup();


