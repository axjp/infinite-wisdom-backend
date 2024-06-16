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
    const newCustomer = new CustomerEntity();
    newCustomer.name = customer.name;
    newCustomer.lastName = customer.lastName;
    newCustomer.email = customer.email; 
    newCustomer.password = customer.password;
    newCustomer.cellphone = customer.cellphone;
    newCustomer.birthday = customer.birthday;
    newCustomer.state = customer.state;

    return await this.customerRepository.save(newCustomer);
  }

  async update(idcustomer: string, updatedcustomer: Partial<CustomerEntity>): Promise<CustomerEntity> {
    let Customer = await this.findCustomer(idcustomer);
    Customer.name = updatedcustomer.name;
    Customer.lastName = updatedcustomer.lastName;
    Customer.email = updatedcustomer.email; 
    Customer.password = updatedcustomer.password;
    Customer.cellphone = updatedcustomer.cellphone;
    Customer.birthday = updatedcustomer.birthday;
    Customer.state = updatedcustomer.state;

    return await this.customerRepository.save(updatedcustomer);

  }

  async remove(idcustomer: string){
    if (!idcustomer) {
      throw new NotFoundException('ID is required for deletion');
    }

    const deleteResult = await this.customerRepository.softDelete({ idcustomer });

    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Administrator with ID ${idcustomer} not found`);
    }

    return  deleteResult;
  }
}