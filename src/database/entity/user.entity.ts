import { BeforeInsert, Column, Entity } from "typeorm";
import { UserStatusEnum } from "../../enum";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;
    @Column({ name: 'email_validation', type: "bool", default: false })
    emailValidation: boolean;

    @Column()
    password: string;

    @Column({ name: 'first_name', nullable: true })
    firstName: string;
    
    @Column({ name: 'last_name', nullable: true })
    lastName: string;
    
    @Column({ name: 'full_name', nullable: true,  })
    fullName: string;

    @Column({ name: 'profile_image', nullable: true })
    profileImage: string;

    @Column({ nullable: true })
    bio: string;

    @Column({ type: "enum", enum: UserStatusEnum, default: UserStatusEnum.INACTIVE })
    status: UserStatusEnum;

    @BeforeInsert()
    insertFullName() {
        this.fullName = `${this.firstName ?? ''} ${this.lastName ?? ''}`;
    }

}