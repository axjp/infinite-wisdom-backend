import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { LoginEntity } from './login.entity';
import { GenderEntity } from './gender.entity';
import { CityEntity } from './city.entity';
import { ReviewEntity } from './review.entity';
import { LoanEntity } from './loan.entity';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_customer' })
  idcustomer: string;

  @OneToOne(() => LoginEntity)
  @JoinColumn({ name: 'login_id' })
  login: LoginEntity;

  @OneToOne(() => GenderEntity)
  @JoinColumn({ name: 'gender_id' })
  gender: GenderEntity;

  @OneToOne(() => CityEntity)
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @OneToMany(() => ReviewEntity, (review) => review.customer)
  reviews: ReviewEntity[];

  @OneToMany(() => LoanEntity, (loan) => loan.customer)
  loans: LoanEntity[];

  @Column({ type: 'varchar', length: 20, name: 'name', comment: 'Name of the customer' })
  name: string;

  @Column({ type: 'varchar', length: 20, name: 'last_name', comment: 'Last name of the customer' })
  lastName: string;

  @Column({ type: 'varchar', length: 10, name: 'cellphone', comment: 'Cellphone number of the customer' })
  cellphone: string;

  @Column({ type: 'varchar', length: 10, name: 'email', comment: 'email of the customer' })
  email: string;

  @Column({ type: 'varchar', length: 25, name: 'password', comment: 'password of the customer' })
  password: string;

  @Column({ type: 'date', name: 'birthday', comment: 'Birthday of the customer' })
  birthday: Date;

  @Column({ type: 'boolean', name: 'state', comment: 'State of the customer' })
  state: boolean;
}
