import {inject, injectable } from "inversify";

import { IMysqlService } from "../../Domain/Interfaces/IMysqlService";
import DependencyTypes from "../../Common/DependencyTypes";
import UserEntity from "../../Domain/Entities/UserEntity";
import IUserRepository from "../../Domain/Interfaces/IUserRepository";
import UserQueries from "../Configuration/UserQueries";
import ItemsCache from "../Cache/ItemsCache";

@injectable()
class UserRepository implements IUserRepository {
    private readonly _mysqlService: IMysqlService;
    private readonly _itemsCache: ItemsCache;

    constructor(
        @inject(DependencyTypes.IMysqlService) mysqlService: IMysqlService,
        @inject(DependencyTypes.ItemsCache) itemsCache: ItemsCache
    ) {
        this._mysqlService = mysqlService
        this._itemsCache = itemsCache
    }

    findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<UserEntity | undefined> {        
        const rows: any = await this._mysqlService.execute<UserEntity[]>(UserQueries.findById, [id]);
                
        if (rows.length <= 0) {
            return undefined;
        }
        
        var data: any = rows;
        data[0]['itemsCache'] = await this._itemsCache.getData();

        return new UserEntity(data);
    }
}



export default UserRepository