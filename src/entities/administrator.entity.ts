import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne, 
  JoinColumn, 
  DeleteDateColumn
} 
from 'typeorm';
import { LoginEntity } from './login.entity';

@Entity('administrators')
export class AdministratorEntity {
<<<<<<< HEAD
  @PrimaryGeneratedColumn('uuid')
idAdministrator: string;
=======
  @PrimaryGeneratedColumn('uuid', {})
  idAdministrator: string;
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf

  @Column({ 
    type: 'varchar', 
    length: 20, 
    comment: 'Name of the administrator' 
  })
  name: string;

  @Column({ 
    type: 'varchar', 
    length: 20, 
<<<<<<< HEAD
=======
    name: 'lastName', 
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf
    comment: 'Last name of the administrator' 
  })
  lastName: string;

  @Column({ 
    type: 'varchar', 
    length: 50, 
<<<<<<< HEAD
=======
    name: 'email',
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf
    comment: 'Email of the administrator' 
  })
  email: string;

  @Column({ 
    type: 'varchar', 
<<<<<<< HEAD
    length: 100,
=======
    length: 100, 
    name: 'password',
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf
    comment: 'Password of the administrator' 
  })
  password: string;

  @Column({ 
    type: 'varchar', 
    length: 15, 
    comment: 'Cellphone number of the administrator' 
  })
  cellphone: string;

  @Column({ 
    type: 'date', 
    comment: 'Birthday of the administrator'
   })
   birthdate: Date;

  @Column({ 
    type: 'boolean', 
    comment: 'State of the administrator' })
  state: boolean;
<<<<<<< HEAD
=======

  @DeleteDateColumn({name:'delete'})
  delete: Date;
  
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf

  @DeleteDateColumn({name:'deleteAdministrator'})
  deleteAdministrator?: Date;
  
  @ManyToOne(() => LoginEntity,(login)=>login.administrators)
  @JoinColumn({ 
    name: 'login_id', 
    foreignKeyConstraintName: 'administrators_login_id_foreing_key' })
  login: LoginEntity;
}
