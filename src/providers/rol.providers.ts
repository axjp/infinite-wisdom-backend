/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { RolEntity } from 'src/entities/rol.entity';
export const rolProviders = [
  {
    provide: 'ROL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RolEntity),
    inject: ['DATA_SOURCE'],
  },
];
