import {
  NumberField,
  StringField,
} from 'src/@common/decorators/field.decorators';

export class Points {
  @StringField({ swagger: true })
  category: string;

  @NumberField({ swagger: true })
  average: number;

  @NumberField({ swagger: true })
  roundedAverage: number;

  @NumberField({ swagger: true })
  reviews: number;
}
