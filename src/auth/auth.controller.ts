import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service'; // Asegúrate de importar y usar tu AuthService aquí

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { customerUser: string; password: string }) {
    const customer = await this.authService.validateCustomer(credentials.customerUser, credentials.password);
    if (!customer) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(customer);
  }
}
