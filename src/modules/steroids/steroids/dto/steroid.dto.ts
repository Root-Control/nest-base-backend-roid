import {
  ApiProperty,
  ApiPropertyOptional,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  ClassField,
  NumberField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CommonNameDto } from '../../common-names/dto/common-name.dto';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ManufacturerDto } from '../../manufacturers/dto/manufacturer.dto';

export class SteroidDto extends BaseDto {
  @StringField({ swagger: true })
  name: string;

  @Expose()
  @ApiProperty({ type: () => CommonNameDto })
  @Transform(({ obj }) => obj.commonNameId, { toClassOnly: true })
  @Type(() => CommonNameDto)
  commonName: CommonNameDto;

  @Expose()
  @ApiProperty({ type: () => ManufacturerDto })
  @Transform(({ obj }) => obj.manufacturerId, { toClassOnly: true })
  @Type(() => ManufacturerDto)
  manufacturer: ManufacturerDto;

  @Exclude()
  commonNameId: CommonNameDto;

  @Exclude()
  manufacturerId: ManufacturerDto;
}

export class SteroidCommentsCountDto extends BaseDto {
  @StringField({ swagger: true })
  name: string;

  @ClassField(() => CommonNameDto)
  commonName: CommonNameDto;

  @ClassField(() => ManufacturerDto)
  manufacturer: ManufacturerDto;

  @NumberField()
  commentCount: number;
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
