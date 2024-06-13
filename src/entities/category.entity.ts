import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { BookEntity } from './book.entity';
@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_category' })
  idcategory: string;

  @Column({ type: 'varchar', length: 20, name: 'category', comment: 'Category of the book' })
  category: string;

  @ManyToMany(() => BookEntity)
  @JoinTable({
    name:'category_book',
    joinColumn:{
        name:'category_id',
        foreignKeyConstraintName:'category_book_category_id_foreign_key',
    },
    inverseJoinColumn:{
        name:'book_id',
        foreignKeyConstraintName:'category_book_book_id_foreign_key',
    },
  })
  books: BookEntity[];
}