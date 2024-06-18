import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BookEntity } from 'src/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(
        @Inject('BOOK_REPOSITORY')
        private readonly bookRepository: Repository<BookEntity>,
    ) { }

  create(payload: any) {
        const newBook = this.bookRepository.create();
        newBook.title = payload.title;
        newBook.nameauthor = payload.nameauthor;
        newBook.lastnameauthor = payload.lastnameauthor;
        newBook.publicationDate = payload.publicationDate;
        newBook.edition = payload.edition;
        newBook.editorial = payload.editorial;
        newBook.description = payload.description;
        newBook.pdfUrl = payload.pdfUrl;
        newBook.imageUrl = payload.imageUrl;
        newBook.pdfName = payload.pdfName;
        newBook.categories = payload.categories;
        newBook.imageName = payload.imageName;
        newBook.state = payload.state;
        return this.bookRepository.save(newBook);
    }

    async update(idbook: string, payload: any) {
        const book = await this.bookRepository.findOne({
          where: { idbook: idbook },
        });
    
        if (!book) {
          throw new BadRequestException('El libro no existe');
        }
    
        book.title = payload.title;
        book.nameauthor = payload.nameauthor;
        book.lastnameauthor = payload.lastnameauthor;
        book.editorial = payload.editorial;
        book.publicationDate = payload.publicationDate;
        book.edition = payload.edition;
        book.description = payload.description;
        book.categories = payload.categories;
        book.state = payload.state;
    
        if (payload.pdfUrl) {
          book.pdfUrl = payload.pdfUrl;
          book.pdfName = payload.pdfName;
        }
    
        if (payload.imageUrl) {
          book.imageUrl = payload.imageUrl;
          book.imageName = payload.imageName;
        }
    
        return this.bookRepository.save(book);
      }

    /*async findBooksByCategory(category: string) {
        return await this.bookRepository.findOne({ where: { categories: category } });
      }
*/

    async findAll() {
        const books = await this.bookRepository.find();
        return books;
    }

    async findBook(idbook: string) {
        const book = await this.bookRepository.findOne({
            where: { idbook: idbook },
        });
        return book;
    }
/*
    async delete(id: string) {
        const deleteBook = await this.bookRepository.delete(id);
        return deleteBook;
    }*/
    async softDelete(idbook: string) {
        if (!idbook) {
          throw new NotFoundException('ID is required for deletion');
        }
    
        const deleteResult = await this.bookRepository.softDelete({ idbook });
    
        if (deleteResult.affected === 0) {
          throw new NotFoundException(`Administrator with ID ${idbook} not found`);
        }
    
        return deleteResult;
      }
}


/*async update2(id: string, payload: any) {
        const user = await this.bookRepository.findOne({
            where: { id: id },
        });

        user.firstName = payload.firstName;
        user.lastName = payload.lastname;
        user.age = payload.age;
        user.state = payload.state;

        return this.userRepository.update(id, user);
    }*/