
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('cities')
export class CityEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_city' })
  idcity: string;

  @Column({ type: 'varchar', length: 20, name: 'city', comment: 'City of the customer' })
  city: string;

  @OneToMany(() => CustomerEntity, (customer) => customer.city)
  customers: CustomerEntity[];
}