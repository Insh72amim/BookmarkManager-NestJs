import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkDTO } from 'src/dtos/bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService : BookmarkService){}

    @Post('create')
    async createBookmark(@Body() bookmark : BookmarkDTO) : Promise<BookmarkDTO> {
        return await this.bookmarkService.createBookmark(bookmark);
    }

    @Get('read/:id')
    async readBookmark(@Param('id') id : number) : Promise<BookmarkDTO> {
        return await this.bookmarkService.readBookmark(id);
    }

    @Post('update/:id')
    async updateBookmark(@Param('id') id : number, @Body() bookmark : BookmarkDTO) : Promise<BookmarkDTO> {
        return await this.bookmarkService.updateBookmark(id, bookmark);
    }

    @Delete('delete/:id')
    async deleteBookmark(@Param('id') id : number) : Promise<String>{
        return await this.bookmarkService.deleteBookmark(id);
    }

}
