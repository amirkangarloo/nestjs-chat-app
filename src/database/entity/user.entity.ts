import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}