import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReviewEntity } from '../entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @Inject('REVIEW_REPOSITORY')
    private readonly reviewRepository: Repository<ReviewEntity>,
  ) {}

  findAll(): Promise<ReviewEntity[]> {
    return this.reviewRepository.find();
  }

  findOne(id: string): Promise<ReviewEntity> {
    return this.reviewRepository.findOne({ where: { idreview: id } });
  }

  create(review: ReviewEntity): Promise<ReviewEntity> {
    return this.reviewRepository.save(review);
  }

  async update(id: string, review: ReviewEntity): Promise<ReviewEntity> {
    await this.reviewRepository.update(id, review);
    return this.reviewRepository.findOne({ where: { idreview: id } });
  }

  async remove(id: number): Promise<void> {
    await this.reviewRepository.delete(id);
  }
}
