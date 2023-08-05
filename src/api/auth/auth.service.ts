import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dtos';
import { User } from 'src/entities';

@Injectable()
export class AuthService {
    constructor(private readonly em : EntityManager) { }

    async signup(user :UserDTO): Promise<UserDTO>{
        try {
            const newUser = new User(user);
            await this.em.persistAndFlush(newUser);
            return newUser;
        } catch (error) {
            console.error(`Error from AuthService ${error}`);
            throw error;
        }
    }

    async signin(user :UserDTO): Promise<UserDTO>{
        try {
            return await this.em.findOneOrFail(User, {email : user.email , password : user.password});
        } catch (error) {
            console.error(`Error from AuthService ${error}`);
            throw error;
        }
    }
}
