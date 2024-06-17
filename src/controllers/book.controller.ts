import { Controller, Post, UploadedFiles, UseInterceptors, BadRequestException, Body, Delete, Param, Put, Get } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { BookService } from 'src/services/book.services';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
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
  async uploadFiles(@UploadedFiles() files: { pdf?: Express.Multer.File[], image?: Express.Multer.File[] }, @Body() payload: any) {
    const fileUrls = {};

    if (files.pdf && files.pdf[0]) {
      fileUrls['pdf'] = `http://localhost:3000/public/pdfs/${files.pdf[0].filename}`;
      payload.pdfUrl = fileUrls['pdf'];
      payload.pdfName = files.pdf[0].filename; // Guardar el nombre del PDF
    }

    if (files.image && files.image[0]) {
      fileUrls['image'] = `http://localhost:3000/public/images/${files.image[0].filename}`;
      payload.imageUrl = fileUrls['image'];
      payload.imageName = files.image[0].filename; // Guardar el nombre de la imagen
    }

    const response = await this.bookService.create(payload);
    return { message: 'Archivos cargados correctamente', response };
}

/*
  @Post()
  async registerUser(@Body() payload: any) {
    const response = await this.bookService.create(payload);
    return response;
  }
*/
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

  @Get(':id')
  async findOneBook(@Param('id') id: string) {
    const response = await this.bookService.findBook(id);
    return response;
  }
}
