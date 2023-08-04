import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./Base";

@Entity()
export class Bookmark extends BaseEntity{

    @Property()
    UserId!: number;

    @Property()
    name : String;

    @Property()
    description : String;

    @Property()
    link : String;

}
