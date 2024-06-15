import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerEntity } from '../entities/customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll() {
    return await this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const customer = await this.customerService.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  @Post()
  async create(@Body() customer: CustomerEntity) {
    return await this.customerService.create(customer);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedCustomer: Partial<CustomerEntity>) {
    const customer = await this.customerService.update(id, updatedCustomer);
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.customerService.remove(id);
  }
}