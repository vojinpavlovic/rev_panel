import "reflect-metadata";
import { config } from "dotenv";
config();

import MysqlService from "./Infrastructure/Services/MysqlService";
import RedisService from './Infrastructure/Services/RedisService';
import { Http } from "./Web/http";

new MysqlService().setup();
new RedisService().setup();
new Http().setup();


