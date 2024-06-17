import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { loanProviders } from './providers/loan.providers';
import { LoanService } from './services/loan.services';
import { LoanController } from './controllers/loan.controller';
import { bookProviders } from './providers/book.providers';
import { BookService } from './services/book.services';
import { customerProviders } from './providers/customer.providers';

import { BookController } from './controllers/book.controller';
import { AdministratorController } from './controllers/administrator.controller';
import { AdministratorServices } from './services/administrator.services';
import { administratorProviders } from './providers/administrator.providers';
import { ReviewController } from './controllers/review.controller';
import { reviewProviders } from './providers/review.providers';
import { ReviewService } from './services/review.services';


@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
    TypeOrmModule.forFeature([LoginEntity]),
  ],
  controllers: [
    BookController,
  ReviewController,
  LoanController,
  BookController,

  AdministratorController],
  providers: [
    ...bookProviders,
    ...reviewProviders,
    ...administratorProviders,
    ...loanProviders,
    ...customerProviders,
    BookService,
    ReviewService,
    LoanService,

    AdministratorServices,

    ],

})
export class AppModule {}
