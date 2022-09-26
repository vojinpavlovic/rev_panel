import {inject, injectable } from "inversify";

import { IMysqlService } from "../../Domain/Interfaces/IMysqlService";
import DependencyTypes from "../../Common/DependencyTypes";
import UserEntity from "../../Domain/Entities/UserEntity";
import IUserRepository from "../../Domain/Interfaces/IUserRepository";
import UserQueries from "../Configuration/UserQueries";

@injectable()
class UserRepository implements IUserRepository {
    private readonly _mysqlService: IMysqlService;

    constructor(
        @inject(DependencyTypes.IMysqlService) mysqlService: IMysqlService
    ) {
        this._mysqlService = mysqlService
    }

    findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<UserEntity | undefined> {        
        const rows: any = await this._mysqlService.execute<UserEntity[]>(UserQueries.findById, [id]);
                
        if (rows.length <= 0) {
            return undefined;
        }


        return new UserEntity(rows);
    }
}



export default UserRepository