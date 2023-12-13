import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  BooleanField,
  ClassFieldOptional,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';

export class ReviewDto extends BaseDto {
  @BooleanField({ swagger: true })
  isRated: boolean;

  @StringField({ swagger: true })
  comments: string;

  @ClassFieldOptional(() => CreateRatingStarDto, { each: true })
  ratingStars: CreateRatingStarDto[];
}

export class UpdateReviewDto extends PartialType(
  OmitType(ReviewDto, [
    'createdAt',
    'updatedAt',
    '_id',
    'ratingStars',
  ] as const),
) {}

export class ReviewQueryDto extends PartialType(
  OmitType(ReviewDto, ['createdAt', 'updatedAt', 'ratingStars'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
