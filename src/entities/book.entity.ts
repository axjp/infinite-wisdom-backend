
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { ReviewEntity } from './review.entity';
import { LoanEntity } from './loan.entity';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_book' })
  idbook: string;

  @Column({ type: 'varchar', length: 20, name: 'title', comment: 'Title of the book' })
  title: string;

  @Column({ type: 'varchar', length: 20, name: 'name_autor', comment: 'Name of the autor' })
  nameauthor: string;

  @Column({ type: 'varchar', length: 20, name: 'last_name_autor', comment: 'Lastname of the autor' })
  lastnameauthor: string;

  @Column({ type: 'date', name: 'publication_date', comment: 'Publication date of the book' })
  publicationDate: Date;

  @Column({ type: 'int', name: 'edition', comment: 'Edition of the book' })
  edition: number;

  @Column({ type: 'varchar', length: 50, name: 'editorial', comment: 'Editorial of the book' })
  editorial: string;

  @Column({ type: 'varchar', length: 100, name: 'description', comment: 'Description of the book' })
  description: string;

  @Column({ type: 'varchar', length: 200, name: 'pdf_name', comment: 'PDF name of the book' })
  pdfname: string;

  @Column({ type: 'varchar', length: 200, name: 'image', comment: 'Image of the book' })
  image: string;

  @Column({ type: 'boolean', name: 'state', comment: 'State of the book' })
  state: boolean;

  @ManyToMany(() => CategoryEntity, (category) => category.books)
  books: BookEntity[];
  

  @OneToMany(() => ReviewEntity, (review) => review.book)
  reviews: ReviewEntity[];

  @OneToMany(() => LoanEntity, (loan) => loan.book)
  loans: LoanEntity[];
}