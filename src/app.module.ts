import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { loanProviders } from './providers/loan.providers';
import { LoanService } from './services/loan.services';
import { LoanController } from './controllers/loan.controller';
import { bookProviders } from './providers/book.providers';
import { BookService } from './services/book.services';
import { BookController } from './controllers/book.controller';
import { ReviewController } from './controllers/review.controller';
import { ReviewService } from './services/review.services';
import { reviewProviders } from './providers/review.providers';
//import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AdministratorEntity } from './entities/administrator.entity';
//import { AdministratorService } from './services/administrator.services';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
    //AuthModule,
    TypeOrmModule.forFeature(),
  ],
  controllers: [
    BookController,
    ReviewController,
    LoanController
  ],
  providers: [
    ...bookProviders,
    ...reviewProviders,
    ...loanProviders,
    BookService,
    ReviewService,
    LoanService,
    //AdministratorService, // Añadimos el servicio de administradores aquí
  ],
})
export class AppModule {}
