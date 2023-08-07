import { EntityManager } from '@mikro-orm/postgresql';
import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ErrorDTO, UserDTO } from 'src/dtos';
import { User } from 'src/entities';

@Injectable()
export class AuthService {
    constructor(private readonly em : EntityManager, private readonly jwtSerice : JwtService) { }

    async signup(user :UserDTO): Promise<UserDTO | ErrorDTO>{
        try {
            const newUser = new User(user);
            await this.em.persistAndFlush(newUser);
            return newUser;
        } catch (error) {
            const errResp : ErrorDTO = {
                status : HttpStatus.CONFLICT,
                message : "Error Occured in Singing Up",
                error : error,
            }
            return errResp;
        }
    }

    async signin(user :UserDTO): Promise<UserDTO | ErrorDTO>{
        try {
            const oldUser = await this.em.findOneOrFail(User, {email : user.email , password : user.password});
            const access_token = await this.generateJwt(oldUser);
            return {...oldUser, access_token};
        } catch (error) {
            const errResp : ErrorDTO = {
                status : HttpStatus.NOT_FOUND,
                message : "Error Occured in SignIn",
                error : error,
            }
            return errResp;
        }
    }


    async generateJwt(user : UserDTO): Promise<String>{
        const payload = {
            sub : user.id,
            name : user.name,
            email : user.email,
        }
        return await this.jwtSerice.signAsync(payload, {
            expiresIn : '100m',
            secret : process.env.JWT_SECRET
        });
    }
}
