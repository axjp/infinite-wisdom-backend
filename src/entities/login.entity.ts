import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { RolEntity } from './rol.entity';
import { AdministratorEntity } from './administrator.entity';
import { CustomerEntity } from './customer.entity';

@Entity('logins')
export class LoginEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_login' })
  idlogin: string;

  @Column({ type: 'varchar', length: 20, name: 'email', comment: 'Email of the user' })
  email: string;

  @Column({ type: 'varchar', length: 100, name: 'password', comment: 'Password of the user' })
  password: string;

  @OneToOne(() => RolEntity)
  @JoinColumn({
    name:'rol_id',
    foreignKeyConstraintName:'logins_rol_id_foreign_key',
  })
  rol: RolEntity;

  @OneToMany(() => AdministratorEntity, (admin) => admin.login)
  administrators: AdministratorEntity[];

  @OneToMany(() => CustomerEntity, (customer) => customer.login)
  customers: CustomerEntity[];
}