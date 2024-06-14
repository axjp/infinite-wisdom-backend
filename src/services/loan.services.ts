import { Inject, Injectable } from '@nestjs/common';
import { LoanEntity } from '../entities/loan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoanService {
  constructor(
    @Inject('LOAN_REPOSITORY')
    private readonly loanRepository: Repository<LoanEntity>,
  ) {}

  async findAll() {
    return await this.loanRepository.find();
  }

  async findOne(id: string): Promise<LoanEntity> {
    return await this.loanRepository.findOne({ where: { idloan: id } });
  }

  async create(loan: LoanEntity): Promise<LoanEntity> {
    return await this.loanRepository.save(loan);
  }

  async update(id: string, updatedLoan: Partial<LoanEntity>): Promise<LoanEntity> {
    await this.loanRepository.update(id, updatedLoan);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.loanRepository.delete(id);
  }
}
