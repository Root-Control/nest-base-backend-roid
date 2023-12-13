import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';

export class ManufacturerDto extends BaseDto {
  @StringField({ swagger: true })
  name: string;
}

export class UpdateManufacturerDto extends PartialType(
  OmitType(ManufacturerDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class ManufacturerQueryDto extends PartialType(
  OmitType(ManufacturerDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
