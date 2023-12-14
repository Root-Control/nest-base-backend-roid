import { ClassField } from 'src/@common/decorators/field.decorators';
import { SourceDto } from './source.dto';
import { Points } from 'src/@base/@shared/shared';

export class SourcePointsDto extends SourceDto {
  @ClassField(() => Points, { each: true })
  points: number[];
}
