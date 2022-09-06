import express, { Express } from 'express';
import "reflect-metadata";
import { initRouter } from './Api/Router'
import { init as MySQLConnector } from './Infrastructure/Databases/MySQL';

const app: Express = express();

const port: number = 3000;

initRouter(app)

// Db Connection
MySQLConnector()

app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${port}`)
});