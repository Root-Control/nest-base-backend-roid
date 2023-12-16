import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  ClassField,
  NumberField,
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/@common/decorators/field.decorators';
import { CommentDto } from 'src/modules/comments/dto/comment.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';

export class SourceDto extends BaseDto {
  @StringField({ swagger: true })
  url: string;

  @StringFieldOptional({ minLength: 1, swagger: true })
  htmlTitle: string;

  @StringFieldOptional({ minLength: 1, swagger: true })
  htmlInfo: string;

  @StringFieldOptional({ minLength: 1, swagger: true })
  description: string;

  @StringField({ swagger: true })
  sourceImage: string[];
}

export class SourceCommentsCountDto extends BaseDto {
  @StringField({ swagger: true })
  url: string;

  @StringField({ swagger: true })
  descriptionTitle: string;

  @StringField({ swagger: true })
  description: string;

  @ClassField(() => UserDto, { swagger: true })
  user: UserDto;

  @ClassField(() => CommentDto, { swagger: true })
  lastComment: CommentDto;

  @ClassField(() => UserDto, { swagger: true })
  lastCommentUser: UserDto;

  @NumberField({ swagger: true })
  commentCount: number;
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
