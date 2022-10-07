import express, { Application } from "express";
import cors from 'cors';
import router from '../Web/Router'
import AddAuth from "../Application/Middlewares/AddAuth";
import AddSession from "../Application/Session/AddSession";

export class Http {
    private app: Application = express();
    private port: number = parseInt(<string>process.env.PORT ?? 3000);
    private corsOptions = {
        credentials: true,
        origin: 'http://localhost:3000'
    }

    private registerMiddlewares(): void {
        this.app.use(cors(this.corsOptions))
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        AddSession(this.app);
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