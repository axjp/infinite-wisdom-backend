import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LoginEntity } from './login.entity';

@Entity('administrators')
export class AdministratorEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_administrator' })
  idAdministrator: string;

  @Column({ 
    type: 'varchar', 
    length: 20, 
    name: 'name', 
    comment: 'Name of the administrator' 
  })
  name: string;

  @Column({ 
    type: 'varchar', 
    length: 20, 
    name: 'last_name', 
    comment: 'Last name of the administrator' 
  })
  lastName: string;

  @Column({ 
    type: 'varchar', 
    length: 50, 
    name: 'email', 
    comment: 'Email of the administrator' 
  })
  email: string;

  @Column({ 
    type: 'varchar', 
    length: 100, 
    name: 'password', 
    comment: 'Password of the administrator' 
  })
  password: string;

  @Column({ 
    type: 'varchar', 
    length: 15, 
    name: 'cellphone', 
    comment: 'Cellphone number of the administrator' 
  })
  cellphone: string;

  @Column({ 
    type: 'date', 
    name: 'birthday', 
    comment: 'Birthday of the administrator'
   })
  birthday: Date;

  @Column({ 
    type: 'boolean', 
    name: 'state', 
    comment: 'State of the administrator' })
  state: boolean;
  

  @ManyToOne(() => LoginEntity,(login)=>login.administrators)
  @JoinColumn({ 
    name: 'login_id', 
    foreignKeyConstraintName: 'administrators_login_id_foreing_key' })
  login: LoginEntity;
}
