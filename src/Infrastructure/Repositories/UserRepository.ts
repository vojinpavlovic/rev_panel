import { UserEntity } from '../../Domain/Entities/UserEntity';
import { IUserRepository } from '../../Domain/Interfaces/Repositories/IUserRepository'
import { execute } from '../Databases/MySQL';

export class UserRepository implements IUserRepository {
    async findUser(id: string) {
        throw new Error('Not implemented');
    }

    deleteUser(id: string) {
        throw new Error('Not implemented');
    }
}
