import { Post, Controller, Body } from '@nestjs/common';
import { UserDTO } from '../../dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post('create')
    async createUser(@Body() user : UserDTO) : Promise<UserDTO> {
        return await this.userService.createUser(user);
    }
}
