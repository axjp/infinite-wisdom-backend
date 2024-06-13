import { DataSource } from 'typeorm';
import { ReviewEntity } from 'src/entities/review.entity';

export const reviewProviders = [
  {
    provide: 'REVIEW_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ReviewEntity),
    inject: ['DATA_SOURCE'],
  },
];
