import { injectable } from 'inversify';
import { UserEntity } from '../../Domain/Entities/UserEntity';
import { IUserRepository } from '../../Domain/Interfaces/Repositories/IUserRepository'
import { execute } from '../Databases/MySQL';

@injectable()
export class UserRepository implements IUserRepository {
    async findUser(id: string) {
        throw new Error('Not implemented');
    }

    async deleteUser(id: string) {
        throw new Error('Not implemented');
    }
}
