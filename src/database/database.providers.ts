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
<<<<<<< HEAD
        database: 'demo4',
=======
        database: 'proyecto',
>>>>>>> 7f702439598e0e5b185b9a6b4e9c184391803574
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        dropSchema: false,
      });

      return dataSource.initialize();
    },
  },
];
