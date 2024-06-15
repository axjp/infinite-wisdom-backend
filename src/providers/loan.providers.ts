/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { LoanEntity } from 'src/entities/loan.entity';

export const loanProviders = [
  {
    provide: 'LOAN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LoanEntity),
    inject: ['DATA_SOURCE'],
  },
];
