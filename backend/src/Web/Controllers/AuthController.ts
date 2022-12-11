import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IUserService } from "../../Domain/Interfaces/IUserService";
import { BaseController } from "../Base/BaseController";

import DependencyTypes from "../../Common/DependencyTypes";
import { BaseResponse } from "../Base/BaseResponse";

@injectable()
export class AuthController extends BaseController {
    private readonly _userService: IUserService;

    constructor(
        @inject(DependencyTypes.IUserService) userService: IUserService
    ) {

        super();
        this._userService = userService
    }

    /**
     * @method login
        Login method is empty since it is not invoked.
        It only just exists for endpoint registration purposes.
    */
    public login = (req: Request, res: Response) => res.end()
    
    /**
     * @method loginCallback
        The loginCallback method is called when the user is authenticated
        by third party authentication such as Steam-Passport strategy.
    */
    public loginCallback = async (req: Request | any, res: Response) => {
        res.redirect(process.env.STEAM_SUCCESSFULL_REDIRECT ?? "http://sogolisica:3001/panel")
    }

    public logout = async (req: Request, res: Response) => {
        res.clearCookie("connect.sid")
        res.send(new BaseResponse(true, "Successfull logout"))
    }
}   