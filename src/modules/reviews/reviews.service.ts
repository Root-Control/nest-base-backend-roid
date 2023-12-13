import { Injectable } from '@nestjs/common';
import { Review, ReviewDocument } from './review.schema';
import { ReviewDto, ReviewQueryDto, UpdateReviewDto } from './dto/review.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ReviewEvent } from './review-types';

@Injectable()
export class ReviewsService extends CrudService<
  ReviewDto,
  CreateReviewDto,
  ReviewQueryDto,
  UpdateReviewDto
> {
  constructor(
    @InjectModel(Review.name) readonly reviewModel: Model<ReviewDocument>,
    private readonly eventEmitter: EventEmitter2,
  ) {
    super(reviewModel, ReviewDto);
  }

  async createReview(createReviewDto: CreateReviewDto): Promise<ReviewDto> {
    const { ratingStars, ...rest } = createReviewDto;

    rest.isRated = ratingStars && ratingStars.length > 0 ? true : false;
    const review = await this.create(rest);

    if (rest.isRated) {
      ratingStars.forEach((rating) => {
        rating.reviewId = review._id;
      });
    }

    this.eventEmitter.emit(ReviewEvent.REVIEW_CREATE, ratingStars);
    return review;
  }
}
