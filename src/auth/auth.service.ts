/*
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdministratorService } from 'src/services/administrator.services';

@Injectable()
export class AuthService {
  constructor(
    private readonly administratorService: AdministratorService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const admin = await this.administratorService.findByEmail(email);
    if (!admin || !(await bcrypt.compare(pass, admin.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: admin.idAdministrator, email: admin.email };
    const { password, ...adminRest } = admin;

    return {
      admin: adminRest,
      token: await this.jwtService.signAsync(payload),
    };
  }
}
*/