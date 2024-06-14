/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { LoginEntity } from './login.entity';

@Entity('roles')
export class RolEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_rol' })
  idrol: string;

  @Column({ type: 'varchar', length: 20, name: 'role', comment: 'Role of the user' })
  role: string;

  @OneToOne(() => LoginEntity, (login) => login.rol)
  login: LoginEntity;
}