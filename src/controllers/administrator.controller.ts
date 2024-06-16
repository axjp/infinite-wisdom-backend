import {
<<<<<<< HEAD
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
    
=======
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
  async findOneAdministrator(@Param('id') idAdministrator: string) {
    return await this.administratorServices.findAdministrator(idAdministrator);
  }

  @Post()
  async createAdministrator(@Body() payload: any) {
    
    return await this.administratorServices.create(payload);
  }

  @Put(':id')
  async update(@Param('ididAdministrator') idAdministrator: string, @Body() payload: any) {
    return await this.administratorServices.update(idAdministrator, payload);
  }

  @Delete(':id')
  async delete(@Param('ididAdministrator') idAdministrator: string) {
    return await this.administratorServices.softDelete(idAdministrator);
  }
}
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf
