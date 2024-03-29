import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    public async register(data: RegisterUserDto) {
        const { password, email, username } = data;
        try {
            const hasUserWithEmail = await this.userService.findByEmail(email);
            if(hasUserWithEmail) throw new BadRequestException(`User with email: ${email} is already exist`)
            const hasUserWithUsername = await this.userService.findByUsername(username);
            if (hasUserWithUsername) throw new BadRequestException(`User with username: ${username} is already exist`)
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
