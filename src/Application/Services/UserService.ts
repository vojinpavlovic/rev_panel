import { inject, injectable } from "inversify";
import { IUserService } from "../../Domain/Interfaces/IUserService";
import { IMysqlService } from "../../Domain/Interfaces/IMysqlService";
import DependencyTypes from "../../Common/DependencyTypes";
import UserEntity from "../../Domain/Entities/UserEntity";

@injectable()
export class UserService implements IUserService {
    private _mysqlService: IMysqlService;

    constructor(
        @inject(DependencyTypes.IMysqlService) mysqlService: IMysqlService
    ) {
        this._mysqlService = mysqlService
    }
    async findUser(userId: string): Promise<any> {
        const fields: string = "accounts, `group`, inventory, job, job_grade, firstname, lastname, sex, height, phone_number, status, vreme, health, pancir, credits";
        const [rows] = await this._mysqlService.execute<UserEntity[]>(`SELECT ${fields} FROM users WHERE identifier = ?`, [userId]);

        if (!rows) {
            return null;
        }

        const entity: UserEntity = new UserEntity(rows);
        console.log(entity);
    }
}

