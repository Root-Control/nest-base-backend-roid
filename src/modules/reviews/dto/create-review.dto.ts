import {
  BooleanFieldOptional,
  ClassFieldOptional,
  EnumField,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';
import { ReviewReferenceType } from '../review-types';
import { Transform } from 'class-transformer';

export class CreateReviewDto {
  @BooleanFieldOptional()
  isRated: boolean;

  @StringField({ swagger: true })
  comments: string;

  @StringField({ swagger: true })
  referenceId: string;

  @EnumField(() => ReviewReferenceType, { swagger: true })
  referenceType: ReviewReferenceType;

  @ClassFieldOptional(() => CreateRatingStarDto, { each: true })
  @Transform(({ obj, value }) => {
    value.forEach((val: any) => {
      val.referenceType = obj.referenceType;
      val.referenceId = obj.referenceId;
    });
    return value;
  })
  ratingStars?: CreateRatingStarDto[];

  userId: string;
}
