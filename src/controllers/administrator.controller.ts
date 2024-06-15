import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} 
from '@nestjs/common';
import { AdministratorServices } from '../services/administrator.services'; 

@Controller('administrators')
export class AdministratorController {
  constructor(private readonly administratorServices: AdministratorServices) {}

  @Get()
  async findAdministrators() {
    return await this.administratorServices.findAll();
  }

  @Get(':id')
  async findOneAdministrator(@Param('id') id: string) {
    return await this.administratorServices.findAdministrator(id);
  }

  @Post()
  async createAdministrator(@Body() payload: any) {
    
    return await this.administratorServices.create(payload);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() payload: any) {
    return await this.administratorServices.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.administratorServices.delete(id);
  }
}
