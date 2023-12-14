import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  BooleanField,
  ClassFieldOptional,
  EnumField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';
import { CommentType } from '../comment-types';

export class CommentDto extends BaseDto {
  @BooleanField({ swagger: true })
  isRated: boolean;

  @StringField({ swagger: true })
  comments: string;

  @EnumField(() => CommentType, { swagger: true })
  type: CommentType;

  @ClassFieldOptional(() => CreateRatingStarDto, { each: true })
  ratingStars: CreateRatingStarDto[];
}

export class UpdateCommentDto extends PartialType(
  OmitType(CommentDto, [
    'createdAt',
    'updatedAt',
    '_id',
    'ratingStars',
  ] as const),
) {}

export class CommentQueryDto extends PartialType(
  OmitType(CommentDto, ['createdAt', 'updatedAt', 'ratingStars'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
