import { PrimaryKey, Property } from "@mikro-orm/core";

export abstract class BaseEntity{

    @PrimaryKey()
    id! : number;

    @Property()
    created_at : Date =  new Date();

    @Property({onUpdate : ()=> new Date() })
    updated_at : Date = new Date();

}
