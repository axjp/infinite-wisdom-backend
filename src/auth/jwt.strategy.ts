/*import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginEntity } from 'src/entities/login.entity';
//import { LoginEntity } from '../database/entities/login.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(LoginEntity)
    private readonly loginRepository: Repository<LoginEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const { email } = payload;
    const user = await this.loginRepository.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    return user;
  }
}
*/