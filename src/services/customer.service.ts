import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll() {
    return await this.customerRepository.find();
  }

  async findOne(id: string): Promise<CustomerEntity> {
    const customer = await this.customerRepository.findOne({ where: { idcustomer: id } });
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  async create(customer: CustomerEntity): Promise<CustomerEntity> {
    return await this.customerRepository.save(customer);
  }

  async update(id: string, updatedcustomer: Partial<CustomerEntity>): Promise<CustomerEntity> {
    const customer = await this.findOne(id); 
    await this.customerRepository.update(id, updatedcustomer);
    return await this.findOne(id); 
  }

  async remove(id: string): Promise<void> {
    const customer = await this.findOne(id); 
    await this.customerRepository.delete(id);
  }
}