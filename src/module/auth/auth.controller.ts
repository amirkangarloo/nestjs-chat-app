import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto, RegisterUserDto } from './dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({ status: 201, description: 'create new user in DB' })
  @ApiResponse({ status: 400, description: 'when email or username are exist' })
  @Post('register')
  public async register(@Body() body: RegisterUserDto) {
    return await this.authService.register(body);
  }

  @Post('login')
  public async login(@Body() body: LoginUserDto) {
    return await this.authService.login(body);
  }
}
