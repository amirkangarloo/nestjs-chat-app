import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto, RegisterUserDto } from './dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller({path: 'auth', version: '1'})
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    public async register(@Body() body: RegisterUserDto) {
        return await this.authService.register(body);
    }

    @Post('login')
    public async login(@Body() body: LoginUserDto) {
        return await this.authService.login(body);
    }
}
