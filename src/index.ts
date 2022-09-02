import express, { Express, Request, Response } from 'express';
const app: Express = express();

const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello, world!")
})

app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${port}`)
});