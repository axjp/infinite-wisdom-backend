import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5434,
        username: 'postgres',
        password: '1234',
        database: 'demo',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        dropSchema: false,
      });

      return dataSource.initialize();
    },
  },
];