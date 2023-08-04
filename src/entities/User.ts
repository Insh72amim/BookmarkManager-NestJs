import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./Base";
import { Hash } from "crypto";
import { UserDTO } from "src/dtos/user.dto";

@Entity()
export class User extends BaseEntity{

    @Property()
    name : String;

    @Property()
    email : String;

    @Property()
    password : String;

    constructor(user : UserDTO) {
        super();
        this.name  = user.name;
        this.email = user.email;
        this.password = user.password;
      }

}
