import { ClassField } from 'src/@common/decorators/field.decorators';
import { SteroidDto } from './steroid.dto';
import { Points } from 'src/@base/@shared/shared';

export class SteroidPointsDto extends SteroidDto {
  @ClassField(() => Points, { each: true })
  points: number[];
}
