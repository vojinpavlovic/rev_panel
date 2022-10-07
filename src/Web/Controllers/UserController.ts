import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IUserService } from "../../Domain/Interfaces/IUserService";
import { BaseController } from "../Base/BaseController";
import { BaseResponse } from "../Base/BaseResponse";

import DependencyTypes from "../../Common/DependencyTypes";

@injectable()
export class UserController extends BaseController {
    private readonly _userService: IUserService;

    constructor(
        @inject(DependencyTypes.IUserService) userService: IUserService
    ) {

        super();
        this._userService = userService
    }

    private decToHex = (id: string): string => {
        return BigInt(id).toString(16)
    }

    public getUser = async (req: Request, res: Response) => {
        const sessData = req.user

        if (sessData === undefined) {
            return res.send(new BaseResponse(false, "Session Data is invalid"))
        }

        
        const steamDec = sessData['_json']['steamid']

        if (steamDec === undefined) {
            return res.status(500).send(new BaseResponse(false, "Internal Error"))
        }

        const steamHex = this.decToHex(steamDec)

        const user = await this._userService.getPlayer(steamHex);

        if (user) {
            return res.send(new BaseResponse(true, "Successfull fetch of user", user))
        }

        return res.status(203).send(new BaseResponse(false, "User does not exist in database"))
    }
}   