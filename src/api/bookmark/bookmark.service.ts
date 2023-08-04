import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { BookmarkDTO } from 'src/dtos/bookmark.dto';
import { Bookmark } from 'src/entities';

@Injectable()
export class BookmarkService {
    constructor(private readonly em : EntityManager) { }

    async createBookmark(bookmark : BookmarkDTO) : Promise<BookmarkDTO> {
        const newBookmark = new Bookmark(bookmark);
        await this.em.persistAndFlush(newBookmark);
        return newBookmark;
    }

    async readBookmark(id : number) : Promise<BookmarkDTO> {
        return await this.em.findOne(Bookmark, {id : id});;
    }

    async updateBookmark(id : number, bookmark : BookmarkDTO){
        const obm = this.em.getReference(Bookmark, id);
        obm.name = bookmark.name;
        obm.description = bookmark.description;
        obm.link = bookmark.link;
        await this.em.flush();
        return obm;
    }

    async deleteBookmark(id : number) : Promise<String> {
        const bm = this.em.getReference(Bookmark, id);
        const uid = bm.userId;
        await this.em.remove(bm).flush();
        return `Bookmark with id ${id} for user with id ${uid} is deleted permanently from database!`;
    }
}
