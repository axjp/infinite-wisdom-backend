import { Inject, Injectable } from '@nestjs/common';
import { BookEntity } from 'src/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(
        @Inject('BOOK_REPOSITORY')
        private readonly bookRepository: Repository<BookEntity>,
    ) { }

    handleUploadedFiles(files: { pdf?: Express.Multer.File[], image?: Express.Multer.File[] }) {
        const fileUrls = {};

        if (files.pdf && files.pdf[0]) {
            const pdfFile = files.pdf[0];
            fileUrls['pdf'] = `http://localhost:3000/public/pdfs/${pdfFile.filename}`;
        }

        if (files.image && files.image[0]) {
            const imageFile = files.image[0];
            fileUrls['image'] = `http://localhost:3000/public/images/${imageFile.filename}`;
        }

        return {
            msg: 'Archivos cargados correctamente',
            files: fileUrls,
        };
    }


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

    create(payload: any) {
        const newBook = this.bookRepository.create();
        newBook.title = payload.title;
        newBook.nameauthor = payload.nameauthor;
        newBook.lastnameauthor = payload.lastnameauthor;
        newBook.editorial = payload.editorial;
        newBook.description = payload.description;
        newBook.pdfname = payload.pdfname;

        return this.bookRepository.save(newBook);
    }

    async update(idbook: string, payload: any) {
        const book = await this.bookRepository.findOne({
            where: { idbook: idbook },
        });

        book.title = payload.title;
        book.nameauthor = payload.nameauthor;
        book.lastnameauthor = payload.lastnameauthor;
        book.editorial = payload.editorial;

        return this.bookRepository.save(book);
    }

    async delete(id: string) {
        const deleteBook = await this.bookRepository.delete(id);
        return deleteBook;
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