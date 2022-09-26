import 'jest';
import UserEntity from '../../../src/Domain/Entities/UserEntity';
import IUserRepository from '../../../src/Domain/Interfaces/IUserRepository';


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

describe('User Repository', () => {
    const userRepository = new MockUserRepository();

    test("Should be defined", () => expect(userRepository).toBeDefined());
    
    test("Should return undefined for not found user", async () => {
        const user = await userRepository.findById("not exists");
        expect(user).toBeUndefined();
    })

    test("Should return empty character", async () => {
        const user: UserEntity | undefined = await userRepository.findById("empty");
        // Check if user is not undefined but UserEntity
        expect(user).toBeInstanceOf(UserEntity);
        // Check inventory of user
        expect(user).toHaveProperty("inventory", []);
        // Check user data is correct 
        expect(user).toHaveProperty("vehicles", []);
        expect(user).toHaveProperty("firstname", undefined);
        expect(user).toHaveProperty("lastname", undefined);
        expect(user).toHaveProperty("sex", undefined);
        expect(user).toHaveProperty("health", 200);
        expect(user).toHaveProperty("pancir", 0);
        expect(user).toHaveProperty("group", "user");
    })

    test("Should return fresh character with 2 inventory items", async () => {
        const user: UserEntity | undefined = await userRepository.findById("lisica");
        // Check if user is not undefined but UserEntity
        expect(user).toBeInstanceOf(UserEntity);
        
        // Inventory items
        expect(user).toHaveProperty("inventory", [
            {name: 'destilovanavoda', count: 9, slot: 1},
            {name: 'coke_figureempty', count: 2, slot: 2}
        ]);

        // Other properties
        expect(user).toHaveProperty("vehicles", []);
        expect(user).toHaveProperty("firstname", "Sogo");
        expect(user).toHaveProperty("lastname", "Lisica");
        expect(user).toHaveProperty("sex", "M");
        expect(user).toHaveProperty("health", 200);
        expect(user).toHaveProperty("pancir", 0);
        expect(user).toHaveProperty("group", "user");
    })

    test("Should return character with vehicle", async () => {
        const user: UserEntity | undefined = await userRepository.findById("vehicleUser");
        // Check if user is not undefined but UserEntity
        expect(user).toBeInstanceOf(UserEntity);    
    
        // Check user inventory 
        expect(user).toHaveProperty("inventory", [
            {name: 'destilovanavoda', count: 9, slot: 1},
            {name: 'coke_figureempty', count: 2, slot: 2}
        ]);

        // Check user Vehicle property 
        expect(user).toHaveProperty("vehicles", [
            {
                img: null,
                job: null,
                model: "sultan",
                plate: "TABLICE2",
                vehicle: {}
            }
        ])

        // Other properties
        expect(user).toHaveProperty("firstname", "Sogo");
        expect(user).toHaveProperty("lastname", "Lisica");
        expect(user).toHaveProperty("sex", "M");
        expect(user).toHaveProperty("health", 200);
        expect(user).toHaveProperty("pancir", 0);
        expect(user).toHaveProperty("group", "user");
    })
})