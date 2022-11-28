import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import DependencyTypes from "../../Common/DependencyTypes";
import IServerRepository from "../../Domain/Interfaces/IServerRepository";
import { BaseResponse } from "../Base/BaseResponse";

@injectable()
export class ServerController {
    private readonly _serverRepository: IServerRepository;

    constructor(
        @inject(DependencyTypes.IServerRepository) serverRepository: IServerRepository
    ) {

        this._serverRepository = serverRepository
    }

    public getDynamic = async (req: Request | any, res: Response) => {
        const result = await this._serverRepository.getDynamic()
        
        if (!result) {
            return res.send(new BaseResponse(false, "Server is probably offline"))
        }

        return res.send(new BaseResponse(true, "Server is online", result))
    }
}   