/*import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

@Public()
@HttpCode(HttpStatus.OK)
@Post('login')
login(@Body() signInDto: Record<string, any>) {
  return this.authService.validateCustomer(signInDto.username, signInDto.password);
  }
  @Get('')
  getProfile() {
    return 'Tiene acceso a una ruta restringida';
  }
}
*/