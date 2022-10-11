import "reflect-metadata";
import 'jest';
import DependencyTypes from "../../../src/Common/DependencyTypes";
import { UserService } from '../../../src/Application/Services/UserService';
import container from "../../../src/InversionOfControl/Container";
import IUserRepository from "../../../src/Domain/Interfaces/IUserRepository";
import MockUserRepository from "../../Infrastructure/Repositories/__mocks__/MockUserRepository";
import { IUserService } from "../../../src/Domain/Interfaces/IUserService";
import UserEntity from "../../../src/Domain/Entities/UserEntity";

describe("User Service tests", () => {
    var userService: IUserService;
    
    beforeAll(() => {
        container.rebind<IUserRepository>(DependencyTypes.IUserRepository).to(MockUserRepository)
        userService = container.get(DependencyTypes.IUserService);
    })

    test("Should be defined", () => expect(userService).toBeDefined());

    test("Should return undefined if user not exists", async () => {
        const user = await userService.getPlayer("not exists")
        expect(user).toBeUndefined();
    })

    test("Should return user entity with firstname to be Sogo and lastname to be Lisica", async () => {
        const user = await userService.getPlayer("lisica");
        expect(user).toBeInstanceOf(UserEntity);
        expect(user).toHaveProperty("firstname", "Sogo");
        expect(user).toHaveProperty("lastname", "Lisica");
    })
})