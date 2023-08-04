import { Post, Controller, Body, Param, Get, Delete } from '@nestjs/common';
import { UserDTO } from '../../dtos/user.dto';
import { UserService } from './user.service';
import { BookmarkDTO } from 'src/dtos/bookmark.dto';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post('create')
    async createUser(@Body() user : UserDTO) : Promise<UserDTO> {
        return await this.userService.createUser(user);
    }

    @Get('read/:id')
    async readUser(@Param('id') id : number) : Promise<UserDTO>{
        return await this.userService.readUser(id);
    }

    @Post('update/:id')
    async updateUser(@Param('id') id : number, @Body() user : UserDTO) : Promise<UserDTO>{
        return await this.userService.updateUser(id, user);
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id ) : Promise<String>{
        return await this.userService.deleteUser(id);
    }

    @Get(':id/bookmarks')
    async getAllBookmarksForUser(@Param('id') id : number): Promise<BookmarkDTO[]>{
        return await this.userService.getAllBookmarksForUser(id);
    }

}
