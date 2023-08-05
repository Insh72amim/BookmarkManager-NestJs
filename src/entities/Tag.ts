import { Collection, Entity, ManyToMany, Property } from "@mikro-orm/core";
import { BaseEntity } from "./Base";
import { TagDTO } from "src/dtos/tags.dto";
import { Bookmark } from "./Bookmark";

@Entity()
export class Tag extends BaseEntity{
    @Property()
    name : String;

    @Property()
    userId : number;

    constructor(tag : TagDTO) {
        super();
        this.name  = tag.name;
    }
}
