import { DataSource } from 'typeorm';
import { LoginEntity } from '../entities/login.entity';

export const loginProviders = [
  {
    provide: 'LOGIN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LoginEntity),
    inject: ['DATA_SOURCE'],
  },
];
