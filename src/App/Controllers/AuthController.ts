import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseController } from "../Base/BaseController";


@injectable()
export class AuthController extends BaseController {
    public user = (req: any, res: Response) => {
        res.send(req.user);
    }

    public login = (req: Request, res: Response) => {
        res.redirect('/')
    }
}   