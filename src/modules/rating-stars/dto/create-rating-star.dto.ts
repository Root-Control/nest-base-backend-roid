import {
  EnumFieldOptional,
  NumberField,
  StringField,
  StringFieldOptional,
} from 'src/@common/decorators/field.decorators';
import { RatingStarReferenceType } from '../rating-star-types';

export class CreateRatingStarDto {
  @NumberField({ swagger: true })
  points: number;

  @StringFieldOptional({ swagger: true })
  content: number;

  @StringFieldOptional({ swagger: true })
  referenceId: string;

  @EnumFieldOptional(() => RatingStarReferenceType, { swagger: true })
  referenceType: RatingStarReferenceType;

  @StringField({ swagger: true })
  categoryId: string;

  @StringFieldOptional({ swagger: true })
  reviewId: string;

  userId: string;
}
