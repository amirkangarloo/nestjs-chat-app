import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from '../../database/entity';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(){}

    public async create(msg: CreateUserDto): Promise<UserEntity> {
        try {
            return await UserEntity.create({ ...msg }).save();
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    }
}
