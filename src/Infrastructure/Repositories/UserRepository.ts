import { IUserRepository } from '../../Domain/Interfaces/Repositories/IUserRepository'

class UserRepository implements IUserRepository {
    findUser(id: string) {
        throw new Error('Method not implemented.');
    }

    deleteUser(id: string) {
        throw new Error('Method not implemented.');
    }
}
