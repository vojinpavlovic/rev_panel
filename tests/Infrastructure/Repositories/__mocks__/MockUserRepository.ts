import "reflect-metadata";
import { injectable } from "inversify";
import UserEntity from "../../../../src/Domain/Entities/UserEntity";
import IUserRepository from "../../../../src/Domain/Interfaces/IUserRepository";

@injectable()
class MockUserRepository implements IUserRepository {
    private mockData: any = [
        // If character is not created before.
        {
            identifier: "empty", 
            user_firstname: null, 
            user_lastname: null, 
            user_health: 200, 
            user_sex: null,
            user_pancir: 0, 
            user_group: "user", 
            user_inventory: null
        },
        // If fresh character is created and has 2 items in.
        {
            identifier: "lisica", 
            user_firstname: "Sogo", 
            user_lastname: "Lisica", 
            user_sex: "M",
            user_health: 200, 
            user_pancir: 0, 
            user_group: "user",
            user_inventory: JSON.stringify([
                {"slot":1,"count":9,"name":"destilovanavoda"},
                {"slot":2,"count":2,"name":"coke_figureempty"}
            ])
        },
        // Character with vehicles
        {
            identifier: "vehicleUser", 
            user_firstname: "Sogo", 
            user_lastname: "Lisica", 
            user_health: 200, 
            user_pancir: 0, 
            user_sex: "M",
            user_group: "user",
            user_inventory: JSON.stringify([
                {"slot":1,"count":9,"name":"destilovanavoda"},
                {"slot":2,"count":2,"name":"coke_figureempty"}
            ]),
            vehicle_plate: "TABLICE2",
            vehicle_specs: null,
            vehicle_model: "sultan",
            vehicle_job: null,
            vehicle_img: null
        },
    ]

    findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<UserEntity | undefined> {
        const data = await this.mockData;

        for (let i = 0; i < data.length; i++) {
            if (data[i].identifier === id) {
                return new UserEntity([data[i]]);
            }
        }

        return undefined;
    }
}

export default MockUserRepository