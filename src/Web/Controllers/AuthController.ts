import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseController } from "../Base/BaseController";


@injectable()
export class AuthController extends BaseController {
    public login = (req: Request, res: Response) => {
        res.redirect('/')
    }

    public loginCb = (req: Request, res: Response) => {
        res.redirect('/')
    }
}   