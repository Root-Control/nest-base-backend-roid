import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';

export class CommentDto extends BaseDto {
  @StringField({ swagger: true })
  content: string;

  @StringField({ swagger: true })
  referenceId: string;
}

export class UpdateCommentDto extends PartialType(
  OmitType(CommentDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class CommentQueryDto extends PartialType(
  OmitType(CommentDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
