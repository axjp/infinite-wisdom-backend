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
import { AdministratorController } from './controllers/administrator.controller';
import { AdministratorServices } from './services/administrator.services';
import { administratorProviders } from './providers/administrator.providers';
import { ReviewController } from './controllers/review.controller';
import { reviewProviders } from './providers/review.providers';
import { ReviewService } from './services/review.services';
//import { AuthService } from './services/auth.service';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
    //AuthModule,
    //TypeOrmModule.forFeature(),
  ],
  controllers: [
    BookController,
  ReviewController,
  LoanController,
  BookController,
  CustomerController,
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
    CustomerService,
    AdministratorServices,
   // AuthService 
    ],

})
export class AppModule {}
