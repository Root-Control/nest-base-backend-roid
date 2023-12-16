import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { Points } from 'src/@base/@shared/shared';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  ClassField,
  ClassFieldOptional,
  NumberField,
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/@common/decorators/field.decorators';
import { calculateScore } from 'src/@common/utilities/utils';
import { CommentDto } from 'src/modules/comments/dto/comment.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';

export class SourceDto extends BaseDto {
  @StringField({ swagger: true })
  url: string;

  @StringFieldOptional({ swagger: true })
  description: string;

  @StringFieldOptional({ swagger: true })
  htmlTitle: string;

  @StringFieldOptional({ swagger: true })
  htmlInfo: string;

  @StringFieldOptional({ swagger: true })
  sourceImage: string;

  @StringField({ swagger: true })
  userId: string;
}

export class SourceDetailDto extends PartialType(
  OmitType(SourceDto, ['userId'] as const),
) {
  @StringField({ swagger: true })
  url: string;

  @StringField({ swagger: true })
  description: string;

  @StringField({ swagger: true })
  htmlTitle: string;

  @StringField({ swagger: true })
  htmlInfo: string;

  @ClassField(() => UserDto, { swagger: true })
  user: UserDto;

  @NumberField({ swagger: true })
  commentCount: number;

  @ClassFieldOptional(() => CommentDto, { swagger: true })
  lastComment: CommentDto;

  @ClassFieldOptional(() => UserDto, { swagger: true })
  lastCommentUser: UserDto;

  @NumberField({ swagger: true })
  reviewCount: number;

  @ClassFieldOptional(() => CommentDto, { swagger: true })
  lastReview: CommentDto;

  @ClassField(() => Points, { swagger: true })
  points: Points[];

  @NumberField({ swagger: true })
  @Expose()
  @Transform(({ obj }) => {
    const points = obj.points.map((point) => point.average);
    return calculateScore(points);
  })
  score: number;
}

export class UpdateSourceDto extends PartialType(
  OmitType(SourceDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class SourceQueryDto extends PartialType(
  OmitType(SourceDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
