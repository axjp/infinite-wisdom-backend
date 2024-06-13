import { DataSource } from 'typeorm';
import { GenderEntity } from 'src/entities/gender.entity';

export const genderProviders = [
  {
    provide: 'GENDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GenderEntity),
    inject: ['DATA_SOURCE'],
  },
];
