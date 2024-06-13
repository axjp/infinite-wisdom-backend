import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { BookEntity } from './book.entity';

@Entity('reviews')
export class ReviewEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_reviews' })
  idreview: string;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({name:'customer_id'})
  customer: CustomerEntity;

  @ManyToOne(() => BookEntity)
  @JoinColumn({name:'book_id'})
  book: BookEntity;

  @Column({ type: 'int', name: 'review_rating', comment: 'Rating of the review' })
  reviewRating: number;

  @Column({ type: 'date', name: 'review_date', comment: 'Date of the review' })
  reviewDate: Date;

  @Column({ type: 'varchar', length: 255, name: 'review_comment', comment: 'Comment of the review' })
  reviewComment: string;

  @Column({ type: 'boolean', name: 'is_approved', comment: 'Approval state of the review' })
  isApproved: boolean;
}