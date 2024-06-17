import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LoginEntity } from '../entities/login.entity';
import { LoginService } from 'src/auth/login.service';

@Controller('logins')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async findAll() {
    return await this.loginService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.loginService.findOne(id);
  }

  @Post()
  async create(@Body() login: LoginEntity) {
    return await this.loginService.create(login);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedLogin: Partial<LoginEntity>) {
    return await this.loginService.update(id, updatedLogin);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.loginService.remove(id);
  }
}
