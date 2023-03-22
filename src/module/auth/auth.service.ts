import { Injectable, Logger } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    public async register(data: RegisterUserDto) {
        const { password, email, username } = data;
        try {
            const hash = await this.hashPassword(password);
            const user = await this.userService.create({ email, username, password: hash });
            delete user.password;
            return user;
        } catch (error) {
            Logger.error(error);
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
