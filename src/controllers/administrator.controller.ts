import {
  Controller,
  Get,
  Param,
  Post,
  Put, 
  Delete,
  Body,
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

  @Get(':idAdministrator')
  async findOneAdministrator(@Param('idAdministrator')idAdministrator: string) {
    return await this.administratorServices.findAdministrator(idAdministrator);
  }
  
  @Post()
  async createAdministrator(@Body() payload: any) {
    
    return await this.administratorServices.create(payload);
  }

  @Put(':idAdministrator')
  async update(@Param('idAdministrator') idAdministrator: string, @Body() payload: any) {
    return await this.administratorServices.update(idAdministrator, payload);
  }

  @Delete(':idAdministrator')
  async delete(@Param('idAdministrator') idAdministrator: string) {
    return await this.administratorServices.softDelete(idAdministrator);
  }
}
  