import { DataSource } from 'typeorm';
import { BookEntity } from 'src/entities/book.entity';

export const bookProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(BookEntity),
    inject: ['DATA_SOURCE'],
  },
];
