import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IUserService } from "../../Domain/Interfaces/IUserService";
import { BaseController } from "../Base/BaseController";
import { BaseResponse } from "../Base/BaseResponse";

import DependencyTypes from "../../Common/DependencyTypes";

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
        Note: user data is declared in session. There is not additional logic
        required after. 
    */
    public loginCallback = (req: Request, res: Response) => {
        res.send(new BaseResponse(true, "Successfully logged in."));
    }
}   