import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AdministratorEntity } from '../entities/administrator.entity';

@Injectable()
export class AdministratorService {
  constructor(
    @Inject('ADMINISTRATOR_REPOSITORY')
    private administratorRepository: Repository<AdministratorEntity>,
  ) {}

  async findByEmail(email: string): Promise<AdministratorEntity | undefined> {
    return this.administratorRepository.findOne({ where: { email } });
  }
}
