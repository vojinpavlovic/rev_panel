import { config } from "dotenv";
import express, { Express } from 'express';
import "reflect-metadata";
import { initRouter } from './Api/Router'
import { init as MySQLConnector } from './Infrastructure/Databases/MySQL';

config()
const app: Express = express();
const port: number = parseInt(<string>process.env.PORT);

app.use(express.json());

initRouter(app)

// Db Connection
MySQLConnector()

app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${port}`)
});