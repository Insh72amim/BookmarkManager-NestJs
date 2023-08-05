import { Post, Controller, Body, Param, Get, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, BookmarkDTO, TagDTO} from '../../dtos';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post()
    async createUser(@Body() user : UserDTO) : Promise<UserDTO> {
        return await this.userService.createUser(user);
    }

    @Get(':id')
    async readUser(@Param('id') id : number) : Promise<UserDTO>{
        return await this.userService.readUser(id);
    }

    @Post(':id')
    async updateUser(@Param('id') id : number, @Body() user : UserDTO) : Promise<UserDTO>{
        return await this.userService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id ) : Promise<String>{
        return await this.userService.deleteUser(id);
    }

    @Get(':id/bookmarks')
    async getAllBookmarksForUser(@Param('id') id : number): Promise<BookmarkDTO[]>{
        return await this.userService.getAllBookmarksForUser(id);
    }

    @Post(':id/tag')
    async createTagForUser(@Body() tag : TagDTO, @Param('id') id : number) : Promise<TagDTO> {
        return await this.userService.createTagForUser(tag, id);
    }

    @Get(':id/tags')
    async readAllTagsForUser(@Param() id : number) : Promise<TagDTO[]> {
        return await this.userService.readAllTagsForUser(id);
    }

}
