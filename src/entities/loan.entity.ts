import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { BookEntity } from './book.entity';

@Entity('loans')
export class LoanEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_loan' })
  idloan: string;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @ManyToOne(() => BookEntity)
  @JoinColumn({ name: 'book_id' })
  book: BookEntity;

  @Column({ type: 'date', name: 'loan_date', comment: 'Loan date' })
  loanDate: Date;

  @Column({ type: 'int', name: 'return_date', comment: 'Return date' })
  returnDate: number;

  @Column({ type: 'varchar', length: 100, name: 'email', comment: 'Email for the loan' })
  email: string;

  @Column({ type: 'boolean', name: 'state', comment: 'State of the loan' })
  state: boolean;
}
