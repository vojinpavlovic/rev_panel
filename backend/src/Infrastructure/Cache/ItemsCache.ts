import { inject, injectable } from "inversify";
import DependencyTypes from "../../Common/DependencyTypes";
import { IMysqlService } from "../../Domain/Interfaces/IMysqlService";
import { IRedisService } from "../../Domain/Interfaces/IRedisService";

@injectable()
class ItemsCache {
    private readonly _mysqlService: IMysqlService;
    private readonly _redisService: IRedisService;

    constructor(
        @inject(DependencyTypes.IMysqlService) mysqlService: IMysqlService,
        @inject(DependencyTypes.IRedisService) redisService: IRedisService
    ) {
        this._mysqlService = mysqlService;
        this._redisService = redisService;
    }

    public async getData() {
        const cache: any = await this._redisService.get("items_data")
        
        if (!cache) {
            const result: any = await this._mysqlService.execute("SELECT * FROM items_data", [])
            var preparedData: any = {}
            
            for (const data of result) {
                const {name, label, weight} = data;
                preparedData[name] = {label: label, weight: weight};
            }
            const setCache = await this._redisService.set("items_data", JSON.stringify(preparedData));

            if (setCache == "OK") console.log("Items Cache successfully has been setted!")

            return preparedData
        }

        return JSON.parse(cache);
    }
}

export default ItemsCache;