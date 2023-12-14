import { Injectable } from '@nestjs/common';
import { RatingStar, RatingStarDocument } from './rating-star.schema';
import {
  RatingStarDto,
  RatingStarQueryDto,
  UpdateRatingStarDto,
} from './dto/rating-star.dto';
import { CreateRatingStarDto } from './dto/create-rating-star.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { OnEvent } from '@nestjs/event-emitter';
import { CommentEvent } from '../comments/comment-types';

@Injectable()
export class RatingStarsService extends CrudService<
  RatingStarDto,
  CreateRatingStarDto,
  RatingStarQueryDto,
  UpdateRatingStarDto
> {
  constructor(
    @InjectModel(RatingStar.name)
    readonly ratingStarModel: Model<RatingStarDocument>,
  ) {
    super(ratingStarModel, RatingStarDto);
  }

  @OnEvent(CommentEvent.REVIEW_CREATE)
  async handleOrderCreatedEvent(createRatingStarDtos: CreateRatingStarDto[]) {
    await this.ratingStarModel.insertMany(createRatingStarDtos);
  }
}
