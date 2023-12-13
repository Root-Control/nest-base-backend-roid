import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';

export class CommonNameDto extends BaseDto {
  @StringField({ swagger: true })
  name: string;
}

export class UpdateCommonNameDto extends PartialType(
  OmitType(CommonNameDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class CommonNameQueryDto extends PartialType(
  OmitType(CommonNameDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
