import {
  ClassField,
  NumberField,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { SourceDto } from './source.dto';

class Points {
  @StringField({ swagger: true })
  category: string;

  @NumberField({ swagger: true })
  average: number;

  @NumberField({ swagger: true })
  roundedAverage: number;
}

export class SourcePointsDto extends SourceDto {
  @ClassField(() => Points, { each: true })
  points: number[];
}
