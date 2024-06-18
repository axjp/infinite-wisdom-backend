// src/auth/login.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
<<<<<<< HEAD
import { RolEntity } from './rol.entity';
import { AdministratorEntity } from './administrator.entity';
import { CustomerEntity } from './customer.entity';
//import * as bcrypt from 'bcrypt';
=======
import { RolEntity } from './rol.entity'; 
import { AdministratorEntity } from './administrator.entity'; 
import { CustomerEntity } from './customer.entity'; 
import * as bcrypt from 'bcrypt';
>>>>>>> 6c1cad083621f22610a13f543e8638ad918a9f77

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

<<<<<<< HEAD
/*  static async createTestCredentials(): Promise<LoginEntity> {
    const email = 'kevin@example.com'; // Usuario de prueba
    const password = '1234'; // Contraseña de prueba
    const hashedPassword = await bcrypt.hash(password, 10);
    const login = new LoginEntity();
    login.email = email;
    login.password = hashedPassword;
    return login;
  }*/
=======
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
>>>>>>> 6c1cad083621f22610a13f543e8638ad918a9f77
}
