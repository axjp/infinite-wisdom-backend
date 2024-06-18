/*import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    const { email, password } = loginDto;
    if (!email || !password) {
      throw new UnauthorizedException('Email and password are required');
    }
    return this.authService.login(email, password);
  }
}
*/