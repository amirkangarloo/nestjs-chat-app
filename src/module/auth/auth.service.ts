import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../../dto';

@Injectable()
export class AuthService {

    public async register(data: RegisterUserDto) {
        return `User with username: ${data.username} has register.`;
    }
}
