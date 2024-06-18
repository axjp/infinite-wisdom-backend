
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { ReviewEntity } from './review.entity';
import { LoanEntity } from './loan.entity';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_book' })
  idbook: string;

  @Column({ type: 'varchar', length: 20, name: 'title', comment: 'Title of the book', nullable: true })
  title: string;

  @Column({ type: 'varchar', length: 20, name: 'name_autor', comment: 'Name of the autor', nullable: true })
  nameauthor: string;

  @Column({ type: 'varchar', length: 20, name: 'last_name_autor', comment: 'Lastname of the autor', nullable: true })
  lastnameauthor: string;

  @Column({ type: 'date', name: 'publication_date', comment: 'Publication date of the book', nullable: true })
  publicationDate: Date;

  @Column({ type: 'int', name: 'edition', comment: 'Edition of the book', nullable: true })
  edition: number;

  @Column({ type: 'varchar', length: 50, name: 'editorial', comment: 'Editorial of the book', nullable: true })
  editorial: string;

  @Column({ type: 'varchar', length: 100, name: 'description', comment: 'Description of the book', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 200, name: 'pdf_url', comment: 'PDF url of the book' , nullable: true})
  pdfUrl: string;

  @Column({ type: 'varchar', length: 200, name: 'image_url', comment: 'Image of the book' , nullable: true})
  imageUrl: string;

  @Column({ type: 'varchar', length: 200, name: 'pdf_name', comment: 'PDF name of the book', nullable: true })
  pdfName: string;

  @Column({ type: 'varchar', length: 200, name: 'image_name', comment: 'Image of the book' , nullable: true})
  imageName: string;

  @Column({ type: 'varchar', length: 200, name: 'categories', comment: 'Image of the book' , nullable: true})
  categories: string;

  @Column({ type: 'boolean', name: 'state', comment: 'State of the book', nullable: true })
  state: boolean;

  /*@ManyToMany(() => CategoryEntity, (category) => category.books)
  categories: CategoryEntity[];
*/
  @OneToMany(() => ReviewEntity, (review) => review.book)
  reviews: ReviewEntity[];

  @OneToMany(() => LoanEntity, (loan) => loan.book)
  loans: LoanEntity[];
}