import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { BaseDto } from 'src/@base/dto/base.dto';
import {
  BooleanField,
  NumberFieldOptional,
  StringField,
} from 'src/@common/decorators/field.decorators';

export class VoteDto extends BaseDto {
  @StringField({ swagger: true })
  referenceType: string;

  @StringField({ swagger: true })
  referenceId: string;

  @BooleanField({ swagger: true })
  upVoted: boolean;
}

export class UpdateVoteDto extends PartialType(
  OmitType(VoteDto, ['createdAt', 'updatedAt', '_id'] as const),
) {}

export class VoteQueryDto extends PartialType(
  OmitType(VoteDto, ['createdAt', 'updatedAt'] as const),
) {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit: number;
}
