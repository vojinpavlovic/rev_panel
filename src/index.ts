import express, { Express } from 'express';
import { initRouter } from '../src/Application/Router'


const app: Express = express();

const port: number = 3000;

initRouter(app)

app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${port}`)
});