// src/auth/login.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { RolEntity } from './rol.entity'; 
import { AdministratorEntity } from './administrator.entity'; 
import { CustomerEntity } from './customer.entity'; 
import * as bcrypt from 'bcrypt';

@Entity('logins')
export class LoginEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_login' })
  idlogin: string;

  @Column({ type: 'varchar', length: 50, name: 'email', comment: 'Email del usuario' })
  email: string;

  @Column({ type: 'varchar', length: 100, name: 'password', comment: 'Contraseña del usuario' })
  password: string;

  @OneToOne(() => RolEntity)
  @JoinColumn({
    name: 'rol_id',
    foreignKeyConstraintName: 'logins_rol_id_foreign_key',
  })
  rol: RolEntity;

  @OneToMany(() => AdministratorEntity, (admin) => admin.login)
  administrators: AdministratorEntity[];

  @OneToMany(() => CustomerEntity, (customer) => customer.login)
  customers: CustomerEntity[];

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
