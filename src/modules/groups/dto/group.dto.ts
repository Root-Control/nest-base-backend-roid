import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  EnumField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { GroupType } from '../group-types';

export class GroupDto extends BaseDto {
  @StringField({ swagger: true })
  name: string;

  @StringField({ swagger: true })
  description: string;

  @EnumField(() => GroupType, { swagger: true })
  type: GroupType;
}

export class UpdateGroupDto extends PartialType(
  OmitType(GroupDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class GroupQueryDto extends PartialType(
  OmitType(GroupDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
