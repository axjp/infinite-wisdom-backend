import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const token = request.headers.authorization.replace('Bearer ', ''); // Extrae el token JWT del encabezado Authorization
      const decoded = this.jwtService.verify(token); // Verifica y decodifica el token
      request.user = decoded; // Asigna el usuario decodificado al objeto de solicitud
      return true;
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
