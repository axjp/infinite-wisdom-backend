import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth.guard'; // Importa el guardia de autenticación JWT

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your_secret_key', // Cambiar por una clave secreta más segura en producción
      signOptions: { expiresIn: '1h' }, // Cambiar el tiempo de expiración según necesidades
    }),
  ],
  providers: [AuthService, JwtAuthGuard],
  controllers: [AuthController],
  exports: [AuthService], // Exporta el servicio de autenticación para otros módulos
})
export class AuthModule {}
