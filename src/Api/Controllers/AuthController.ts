import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IAuthService } from "../../Application/Interfaces/IAuthService";
import { BaseController } from "../Base/BaseController";


@injectable()
export class AuthController extends BaseController {
    private readonly authService: IAuthService;
    
    constructor(
        @inject("IAuthService") authService : IAuthService
    ) {
        super();
        this.authService = authService;
    }
    
    public login = (req: Request, res: Response) => {
        this.authService.authenticateUser();
        super.ok(res, "Not implemented yet")
    }

    public register = (req: Request, res: Response) => {
        super.created(res, "Not implemented yet")
    }
}   