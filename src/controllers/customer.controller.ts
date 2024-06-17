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

  @Get(':idcustomer')
  async findOneCustomer(@Param('idcustomer') idcustomer: string) {
    return await this.customerService.findCustomer(idcustomer);
  }

  @Post()
  async create(@Body() customer: CustomerEntity) {
    return await this.customerService.create(customer);
  }

  @Put(':idcustomer')
  async update(@Param('idcustomer') idcustomer: string, @Body() updatedCustomer: Partial<CustomerEntity>) {
    const customer = await this.customerService.update(idcustomer, updatedCustomer);
    if (!customer) {
      throw new NotFoundException(`Customer with id ${idcustomer} not found`);
    }
    return customer;
  }

  @Delete(':idcustomer')
  async remove(@Param('idcustomer') idcustomer: string) {
    await this.customerService.remove(idcustomer);
  }
}