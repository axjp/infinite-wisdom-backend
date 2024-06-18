/*import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginEntity } from '../entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private readonly loginRepository: Repository<LoginEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<LoginEntity | null> {
    const user = await this.loginRepository.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.idlogin };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async findAll(): Promise<LoginEntity[]> {
    return this.loginRepository.find();
  }

  async findOne(id: string): Promise<LoginEntity> {
    return this.loginRepository.findOne({ where: { idlogin: id } });
  }

  async create(login: LoginEntity): Promise<LoginEntity> {
    return this.loginRepository.save(login);
  }

  async update(id: string, updatedLogin: Partial<LoginEntity>): Promise<LoginEntity> {
    await this.loginRepository.update(id, updatedLogin);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.loginRepository.delete(id);
  }
}
*/