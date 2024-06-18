import { Inject, Injectable,  } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';

@Injectable()
export class CustomerService {

  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll() {
    const customers = await this.customerRepository.find({
      relations: { login: true },
      where: [{ email: ILike('%L%') }, { lastName: ILike('%L%') }],
    });
    return customers;
  }

 
   
  async findCustomer(customerUser: string): Promise<CustomerEntity> {
    return this.customerRepository.findOne({ where: { customerUser } });
  }

  create(customer: CustomerEntity): Promise<CustomerEntity> {
    const newCustomer = this.customerRepository.create(customer);
    newCustomer.name = customer.name;
    newCustomer.lastName = customer.lastName;
    newCustomer.email = customer.email;
    newCustomer.customerUser = customer.customerUser; 
    newCustomer.password = customer.password;
    newCustomer.cellphone = customer.cellphone;
    newCustomer.birthday = customer.birthday;
    newCustomer.accept = customer.accept;
    return  this.customerRepository.save(newCustomer);
  }

  async update(idcustomer: string, updatedcustomer: Partial<CustomerEntity>): Promise<CustomerEntity> {
    const customer = await this.findCustomer(idcustomer);
    customer.name = updatedcustomer.name;
    customer.lastName = updatedcustomer.lastName;
    customer.email = updatedcustomer.email; 
    customer.password = updatedcustomer.password;
    customer.cellphone = updatedcustomer.cellphone;
    customer.birthday = updatedcustomer.birthday;
    customer.accept = updatedcustomer.accept;

    return await this.customerRepository.save(customer);
  }

    async remove(idcustomer: string) {
      const deleteUser = await this.customerRepository.delete(idcustomer);
      return deleteUser;
      
  }
};
