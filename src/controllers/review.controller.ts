import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReviewEntity } from '../entities/review.entity';
import { ReviewService } from 'src/services/review.services';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @Post()
  create(@Body() review: ReviewEntity) {
    return this.reviewService.create(review);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() review: ReviewEntity) {
    return this.reviewService.update(id, review);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(+id);
  }
}
