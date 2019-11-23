import { Injectable } from '@nestjs/common';
import { database } from '../database';
import { User } from './classes/user';

@Injectable()
export class UsersService {

    getAllUsers() {
        return database.getAll();
    }

    insertUser(user: User) {
        return database.insert(user);
    }

    getById(id: number) {
        return database.getById(id);
    }

    deleteById(id: number) {
        return database.deleteByid(id);
    }

}
