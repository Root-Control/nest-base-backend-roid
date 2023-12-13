import { ApiPropertyOptional } from '@nestjs/swagger';
import { NumberFieldOptional } from 'src/@common/decorators/field.decorators';

export class PaginationQueryDto {
  @ApiPropertyOptional()
  @NumberFieldOptional()
  skip?: number;

  @ApiPropertyOptional()
  @NumberFieldOptional()
  limit?: number;
}
