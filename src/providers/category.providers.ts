/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CategoryEntity } from 'src/entities/category.entity';

export const categoryProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CategoryEntity),
    inject: ['DATA_SOURCE'],
  },
];
