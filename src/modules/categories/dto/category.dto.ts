import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  EnumField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CategoryType } from '../category.types';

export class CategoryDto extends BaseDto {
  @EnumField(() => CategoryType)
  type: CategoryType;

  @StringField({ swagger: true })
  name: string;

  @StringField({ swagger: true })
  shortName: string;
}

export class UpdateCategoryDto extends PartialType(
  OmitType(CategoryDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class CategoryQueryDto extends PartialType(
  OmitType(CategoryDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
