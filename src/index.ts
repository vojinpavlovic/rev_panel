import express, { Express } from 'express';
import "reflect-metadata";
import { initRouter } from './Api/Router'

const app: Express = express();

const port: number = 3000;

initRouter(app)


app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${port}`)
});