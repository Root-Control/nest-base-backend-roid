import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  ClassField,
  ClassFieldOptional,
  EnumField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';
import { CommentType } from '../comment-types';
import { Exclude, Expose, Transform } from 'class-transformer';
import { UserDto } from 'src/modules/users/dto/user.dto';

export class CommentDto extends BaseDto {
  @StringField({ swagger: true })
  comments: string;

  @StringField({ swagger: true })
  referenceId: string;

  @StringField({ swagger: true })
  referenceType: string;

  @Exclude()
  @ClassField(() => UserDto, { swagger: true })
  userId: UserDto;

  @Expose()
  @ClassField(() => UserDto, { swagger: true })
  @Transform(({ obj }) => obj.userId, { toClassOnly: true })
  user: UserDto;

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

  populate: string[];
}
