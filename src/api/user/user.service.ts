import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { UserDTO } from '../../dtos/user.dto';
import { Bookmark, User } from 'src/entities';
import { BookmarkDTO } from 'src/dtos/bookmark.dto';


@Injectable()
export class UserService {

    // deprecated version of mikro orm
    // constructor(@InjectRepository(User) private readonly userRepository : EntityRepository<User>) { }
    // async createUser(user : UserDTO) : Promise<UserDTO>{
    //     const newUser =  this.userRepository.create(new User(user));
    //     await this.userRepository.persistAndFlush(newUser);
    //     return user;
    // }

    constructor(private readonly em : EntityManager) { }

    async createUser(user : UserDTO) : Promise<UserDTO>{
        const newUser = new User(user);
        await this.em.persistAndFlush(newUser);
        return user;
    }

    async readUser(id : number) : Promise<UserDTO>{
        return await this.em.findOne(User, {id : id});
    }

    async updateUser(id : number, user : UserDTO) : Promise<UserDTO>{
        const oldUser = this.em.getReference(User, id);
        oldUser.name = user.name;
        oldUser.email = user.email;
        oldUser.password = user.password;
        await this.em.flush();
        return user;
    }

    async deleteUser(id : number) : Promise<String>{
        const user = this.em.getReference(User, id);
        await this.em.remove(user).flush();
        return `User with id ${id} is deleted permanently from database`;
    }

    async getAllBookmarksForUser(id :number) : Promise<BookmarkDTO[]>{
        const bookmarks = this.em.find(Bookmark, {userId : id});
        return bookmarks;
    }

}
