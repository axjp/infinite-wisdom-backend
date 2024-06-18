import { Inject, Injectable } from '@nestjs/common';
import { LoanEntity } from '../entities/loan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoanService {
  constructor(
    @Inject('LOAN_REPOSITORY')
    private readonly loanRepository: Repository<LoanEntity>,
  ) {}

  // Método para encontrar todos los préstamos
  async findAll(): Promise<LoanEntity[]> {
    return await this.loanRepository.find();
  }

  // Método para encontrar un préstamo por su ID
  async findOne(id: string): Promise<LoanEntity> {
    return await this.loanRepository.findOne({ where: { idloan: id } });
  }

  // Método para crear un nuevo préstamo
  async create(loan: LoanEntity): Promise<LoanEntity> {
    return await this.loanRepository.save(loan);
  }

  // Método para actualizar un préstamo existente por su ID
  async update(id: string, updatedLoan: Partial<LoanEntity>): Promise<LoanEntity> {
    await this.loanRepository.update(id, updatedLoan);
    return await this.findOne(id);
  }

  // Método PATCH para realizar actualización parcial de un préstamo por su ID
  async patch(id: string, partialLoan: Partial<LoanEntity>): Promise<LoanEntity> {
    await this.loanRepository.update(id, partialLoan);
    return await this.findOne(id);
  }

  // Método para eliminar un préstamo por su ID
  async remove(id: string): Promise<void> {
    await this.loanRepository.delete(id);
  }
}
