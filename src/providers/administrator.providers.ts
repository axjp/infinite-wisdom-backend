/*
import { DataSource } from 'typeorm';
import { AdministratorEntity } from '../entities/administrator.entity';

export const administratorProviders = [
  {
    provide: 'ADMINISTRATOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AdministratorEntity),
    inject: ['DATA_SOURCE'],
  },
];
*/