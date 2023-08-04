import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { UserDTO } from '../../dtos/user.dto';
import { User } from 'src/entities';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository : EntityRepository<User>) { }

    async createUser(user : UserDTO) : Promise<UserDTO>{
        const newUser =  this.userRepository.create(new User(user));
        await this.userRepository.persist(newUser).flush();
        return user;
    }

}
