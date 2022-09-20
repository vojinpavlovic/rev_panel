import "reflect-metadata";
import { config } from "dotenv";
config();

import { Http } from "./Web/http";
new Http().setup();


