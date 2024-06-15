import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { bookProviders } from './providers/book.providers';
import { BookService } from './services/book.services';
import { BookController } from './controllers/book.controller';
import { AdministratorController } from './controllers/administrator.controller';
import { AdministratorServices } from './services/administrator.services';
import { administratorProviders } from './providers/administrator.providers';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
  ],
  controllers: [
    BookController,
    AdministratorController,
  ],
  providers: [
    ...bookProviders,
    ...administratorProviders,
    BookService,
    AdministratorServices

  ],
})
export class AppModule { }
