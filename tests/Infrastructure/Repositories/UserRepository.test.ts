import 'jest';
import UserEntity from '../../../src/Domain/Entities/UserEntity';
import MockUserRepository from './__mocks__/MockUserRepository';

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