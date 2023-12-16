import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';

export class TopicDto extends BaseDto {
  @StringField({ swagger: true })
  name: string;

  @StringField({ swagger: true })
  description: string;
}

export class UpdateTopicDto extends PartialType(
  OmitType(TopicDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class TopicQueryDto extends PartialType(
  OmitType(TopicDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
