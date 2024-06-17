import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll() {
    const customers = await this.customerRepository.find();
    return customers;
  }

  async findCustomer(id: string): Promise<CustomerEntity> {
    const customer = await this.customerRepository.findOne({ where: { idcustomer: id } });
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  async create(customer: CustomerEntity): Promise<CustomerEntity> {
    const newCustomer = this.customerRepository.create(customer);
    return await this.customerRepository.save(newCustomer);
  }

  async update(idcustomer: string, updatedcustomer: Partial<CustomerEntity>): Promise<CustomerEntity> {
    const customer = await this.findCustomer(idcustomer);
    customer.name = updatedcustomer.name;
    customer.lastName = updatedcustomer.lastName;
    customer.email = updatedcustomer.email; 
    customer.password = updatedcustomer.password;
    customer.cellphone = updatedcustomer.cellphone;
    customer.birthday = updatedcustomer.birthday;
    customer.state = updatedcustomer.state;

    return await this.customerRepository.save(customer);
  }

  async remove(idcustomer: string) {
    if (!idcustomer) {
      throw new NotFoundException('ID is required for deletion');
    }

    const deleteResult = await this.customerRepository.softDelete({ idcustomer });

    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Customer with ID ${idcustomer} not found`);
    }

    return deleteResult;
  }
}
