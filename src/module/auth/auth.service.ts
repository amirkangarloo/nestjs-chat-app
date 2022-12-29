import { Injectable } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from '../../dto';

@Injectable()
export class AuthService {

    public async register(data: RegisterUserDto) {
        return `User with username: ${data.username} register.`;
    }

    public async login(data: LoginUserDto) {
        return `User with username: ${data.loginId} login.`;
    }
}
