import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { loanProviders } from './providers/loan.providers';
import { LoanService } from './services/loan.services';
import { LoanController } from './controllers/loan.controller';
import { bookProviders } from './providers/book.providers';
import { BookService } from './services/book.services';
import { customerProviders } from './providers/customer.providers';
import { CustomerService } from './services/customer.service';
import { CustomerController } from './controllers/customer.controller'
import { BookController } from './controllers/book.controller';
import { ReviewController } from './controllers/review.controller';
import { ReviewService } from './services/review.services';
import { reviewProviders } from './providers/review.providers';

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
  ReviewController,
  LoanController,
  BookController,
  CustomerController],
  providers: [
    ...bookProviders,
    ...reviewProviders,
    ...loanProviders,
    ...customerProviders,
    BookService,
    ReviewService,
    LoanService,
    CustomerService
  ],
})
export class AppModule {}
