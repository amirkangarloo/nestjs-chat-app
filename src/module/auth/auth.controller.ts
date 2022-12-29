import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    public async register(@Body() body: RegisterUserDto) {
        return await this.authService.register(body);
    }
}
