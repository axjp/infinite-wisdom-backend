import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LoanService } from '../services/loan.services';
import { LoanEntity } from '../entities/loan.entity';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  async findAll() {
    return await this.loanService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.loanService.findOne(id);
  }

  @Post()
  async create(@Body() loan: LoanEntity) {
    return await this.loanService.create(loan);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedLoan: Partial<LoanEntity>) {
    return await this.loanService.update(id, updatedLoan);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.loanService.remove(id);
  }
}
