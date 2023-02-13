import { Injectable } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from '../../dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../database/entity';

@Injectable()
export class AuthService {

    public async register(data: RegisterUserDto) {
        const { password, email, username } = data;
        try {
            const hash = await this.hashPassword(password);
            const user = await UserEntity.create({ email, username, password: hash }).save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async login(data: LoginUserDto) {
        return `User with username: ${data.loginId} login.`;
    }

    private async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash;
    }

    private async comparePassword(password: string, hash: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }
}
