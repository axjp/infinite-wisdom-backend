import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { CustomerService } from 'src/services/customer.service';
import { customerProviders } from 'src/providers/customer.providers';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: '1234', 
      signOptions: { expiresIn: '10s' }, 
    }),
  ],
  providers: [
    AuthService, 
    CustomerService,
    ...customerProviders,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
