import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../services/customer.service'; // Asegúrate de importar y usar tu servicio de Customer aquí
import { CustomerEntity } from '../entities/customer.entity'; // Asegúrate de importar y usar tu entidad de Customer aquí

@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService,
  ) {}

  async validateCustomer(customerUser: string, password: string): Promise<CustomerEntity | null> {
    const customer = await this.customerService.findCustomer(customerUser);

    if (customer && customer.password === password) {
      return customer;
    }
    return null;
  }

  async login(customer: CustomerEntity) {
    const payload = { username: customer.customerUser, sub: customer.idcustomer };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
