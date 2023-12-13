import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  EnumField,
  NumberField,
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/@common/decorators/field.decorators';
import { RatingStarReferenceType } from '../rating-star-types';

export class RatingStarDto extends BaseDto {
  @NumberField()
  points: number;

  @StringFieldOptional({ swagger: true })
  content: number;

  @StringField({ swagger: true })
  referenceId: string;

  @EnumField(() => RatingStarReferenceType)
  referenceType: RatingStarReferenceType;

  @StringField({ swagger: true })
  categoryId: string;

  @StringField({ swagger: true })
  reviewId: string;
}

export class UpdateRatingStarDto extends PartialType(
  OmitType(RatingStarDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class RatingStarQueryDto extends PartialType(
  OmitType(RatingStarDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
