import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  ClassField,
  ClassFieldOptional,
  NumberField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CommonNameDto } from '../../common-names/dto/common-name.dto';
import { ManufacturerDto } from '../../manufacturers/dto/manufacturer.dto';
import { Points } from 'src/@base/@shared/shared';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { CommentDto } from 'src/modules/comments/dto/comment.dto';
import { Expose, Transform } from 'class-transformer';
import { calculateScore } from 'src/@common/utilities/utils';

export class SteroidDto extends BaseDto {
  @StringField({ swagger: true })
  name: string;

  @StringField({ swagger: true })
  commonNameId: string;

  @StringField({ swagger: true })
  manufacturerId: string;

  @StringField({ swagger: true })
  userId: string;
}

export class SteroidDetailDto extends PartialType(
  OmitType(SteroidDto, ['commonNameId', 'manufacturerId', 'userId'] as const),
) {
  @StringField({ swagger: true })
  name: string;

  @ClassField(() => CommonNameDto, { swagger: true })
  commonName: CommonNameDto;

  @ClassField(() => ManufacturerDto, { swagger: true })
  manufacturer: ManufacturerDto;

  @ClassField(() => Points, { swagger: true })
  points: Points[];

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

  @NumberField({ swagger: true })
  @Expose()
  @Transform(({ obj }) => {
    const points = obj.points.map((point) => point.average);
    return calculateScore(points);
  })
  score: number;
}

export class UpdateSteroidDto extends PartialType(
  OmitType(SteroidDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class SteroidQueryDto extends PartialType(
  OmitType(SteroidDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;

  populate?: string[];
}
