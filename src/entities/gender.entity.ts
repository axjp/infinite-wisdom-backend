import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('genders')
export class GenderEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_gender' })
  idgender: string;

  @Column({ type: 'varchar', length: 20, name: 'gender', comment: 'Gender of the customer' })
  gender: string;

  @OneToMany(() => CustomerEntity, (customer) => customer.gender)
  customers: CustomerEntity[];
}