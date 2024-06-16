import { Controller, Post, UploadedFiles, UseInterceptors, BadRequestException, Body, Delete, Param, Put, Get } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { BookService } from 'src/services/book.services';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'pdf', maxCount: 1 },
      { name: 'image', maxCount: 1 }
    ], {
      storage: diskStorage({
        destination: (req, file, cb) => {
          if (file.fieldname === 'pdf') {
            cb(null, './public/pdfs');
          } else if (file.fieldname === 'image') {
            cb(null, './public/images');
          } else {
            cb(new BadRequestException('Tipo de archivo no soportado'), ''); 
          }
        },
        filename: (req, file, cb) => {
          const ext = path.extname(file.originalname);
          const fileName = `${Date.now()}${ext}`;
          cb(null, fileName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.fieldname === 'pdf') {
          if (!file.originalname.match(/\.(pdf)$/)) {
            return cb(new BadRequestException('¡Solo se permiten archivos PDF!'), false);
          }
        } else if (file.fieldname === 'image') {
          if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new BadRequestException('¡Solo se permiten archivos PNG, JPG y JPEG!'), false);
          }
        }
        cb(null, true);
      },
    }),
  )
  @Post()
  uploadFiles(@UploadedFiles() files: { pdf?: Express.Multer.File[], image?: Express.Multer.File[] }) {
    return this.bookService.handleUploadedFiles(files);
  }

  @Put(':idbook')
  update(@Param('idbook') idbook: string, @Body() payload: any) {
    //todo
    return '';
  }

  @Delete(':idbook')
  delete(@Param('idbook') idbook: string) {
    return this.bookService.delete(idbook);
  }

  @Get()
  async findBooks() {
    const response = await this.bookService.findAll();

    return response;
  }

  @Get(':idbook')
  async findOneBook(@Param('idbook') idbook: string) {
    const response = await this.bookService.findBook(idbook);
    return response;
  }
}
