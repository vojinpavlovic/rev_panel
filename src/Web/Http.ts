import express from "express";
import session from "express-session";
import cors from 'cors';
import router from '../Web/Router'
import AddAuth from "../Application/Middlewares/AddAuth";
import { sessionConfig } from "../config/Session";

export class Http {
    private app: express.Application = express();
    private port: number = parseInt(<string>process.env.PORT ?? 3000);

    public registerMiddlewares(): void {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(session(sessionConfig));
        AddAuth(this.app);
    }

    public setup(): void {
        this.registerMiddlewares();
        router(this.app)
        this.app.listen(this.port, () => 
            console.log([`🚀 Listening on http://localhost:${this.port}`])
        );
    }
}