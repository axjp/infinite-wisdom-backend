import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { LoginEntity } from './login.entity';

@Entity('administrators')
export class AdministratorEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_administrator' })
  idAdministrator: string;

  @Column({ type: 'varchar', length: 20, comment: 'Name of the administrator' })
  name: string;

  @Column({ type: 'varchar', length: 20, comment: 'Last name of the administrator' })
  lastName: string;

  @Column({ type: 'varchar', length: 50, comment: 'Email of the administrator' })
  email: string;

  @Column({ type: 'varchar', length: 100, comment: 'Password of the administrator' })
  password: string;

  @Column({ type: 'varchar', length: 15, comment: 'Cellphone number of the administrator' })
  cellphone: string;

  @Column({ type: 'date', comment: 'Birthday of the administrator' })
  birthdate: Date;

  @Column({ type: 'boolean', comment: 'State of the administrator' })
  state: boolean;

  @DeleteDateColumn({ name: 'delete_administrator' })
  deleteAdministrator?: Date;

  @ManyToOne(() => LoginEntity, login => login.administrators)
  @JoinColumn({ name: 'login_id', foreignKeyConstraintName: 'administrators_login_id_foreign_key' })
  login: LoginEntity;
}
