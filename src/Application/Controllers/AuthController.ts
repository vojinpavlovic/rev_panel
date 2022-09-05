import { Request, Response } from "express";
import { BaseController } from "../../Application.Core/Controllers/BaseController";

export class AuthController extends BaseController {
    public login(req: Request, res: Response) {
        super.ok(res, "Not implemented yet")
    }

    public register(req: Request, res: Response) {
        super.created(res, "Not implemented yet")
    }
}