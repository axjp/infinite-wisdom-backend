/*import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../services/customer.service'; 


@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomerService,
    private jwtService: JwtService,
  ) {}

  async validateCustomer(customerUser: string, pass: string): Promise<any> {
    const customer = await this.customerService.findCustomer(customerUser);

    if (customer?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: customer.idcustomer, username: customer.email };

    const { password, ...userRest } = customer;

    return {
      user: userRest,
      token: await this.jwtService.signAsync(payload),
    };
  }
<<<<<<< HEAD
}*/
=======
}

>>>>>>> 6c1cad083621f22610a13f543e8638ad918a9f77
