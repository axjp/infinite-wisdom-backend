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
import { CustomerController } from './controllers/customer.controller';
import { BookController } from './controllers/book.controller';
import { AdministratorController } from './controllers/administrator.controller';
import { AdministratorServices } from './services/administrator.services';
import { administratorProviders } from './providers/administrator.providers';
import { ReviewController } from './controllers/review.controller';
import { reviewProviders } from './providers/review.providers';
import { ReviewService } from './services/review.services';
<<<<<<< HEAD
//import { LoginService } from './auth/login.service';
//import { LoginController } from './auth/login.controller';
import { LoginEntity } from './entities/login.entity';
//import { LoginController } from './controllers/login.controller';
=======
import { AuthController } from './auth/auth.controller';

import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
>>>>>>> 6c1cad083621f22610a13f543e8638ad918a9f77

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
<<<<<<< HEAD
    //TypeOrmModule.forFeature([LoginEntity]),
=======
    
>>>>>>> 6c1cad083621f22610a13f543e8638ad918a9f77
  ],
  controllers: [
    BookController,
    ReviewController,
    LoanController,
    //CustomerController,
    AdministratorController,
<<<<<<< HEAD
    //LoginController,
=======
    AuthController,
>>>>>>> 6c1cad083621f22610a13f543e8638ad918a9f77
  ],
  providers: [
    ...bookProviders,
    ...reviewProviders,
    ...administratorProviders,
    ...loanProviders,
    //...customerProviders,
    BookService,
    ReviewService,
    LoanService,
   // CustomerService,
    AdministratorServices,
<<<<<<< HEAD
   // LoginService,
=======
    AuthService
 
>>>>>>> 6c1cad083621f22610a13f543e8638ad918a9f77
  ],
})
export class AppModule {}
