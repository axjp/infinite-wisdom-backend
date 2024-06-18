/*import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
//import { LoginController } from './login.controller';
import { LoginEntity } from '../entities/login.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from 'src/controllers/login.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoginEntity]),
    JwtModule.register({
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export class AuthModule {}
*/