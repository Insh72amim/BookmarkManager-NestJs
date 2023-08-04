import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./Base";
import { BookmarkDTO } from "src/dtos/bookmark.dto";

@Entity()
export class Bookmark extends BaseEntity{

    @Property()
    userId: number;

    @Property()
    name : String;

    @Property()
    link : String;

    @Property()
    description : String;

    constructor(bookmark : BookmarkDTO) {
        super();
        this.userId  = bookmark.userId;
        this.name = bookmark.name;
        this.link = bookmark.link;
        this.description = bookmark.description;
      }

}
