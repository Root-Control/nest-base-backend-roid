import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  ClassField,
  NumberField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { UserDto } from 'src/modules/users/dto/user.dto';

export class SourceDto extends BaseDto {
  @StringField({ swagger: true })
  url: string;

  @StringField({ swagger: true })
  description: string;

  @StringField({ swagger: true })
  sourceImage: string[];
}

export class SourceCommentsCountDto extends BaseDto {
  @StringField({ swagger: true })
  url: string;

  @StringField({ swagger: true })
  description: string;

  @ClassField(() => UserDto)
  user: UserDto;

  @NumberField()
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
