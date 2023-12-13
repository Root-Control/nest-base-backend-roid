import { StringField } from 'src/@common/decorators/field.decorators';

export class CreateSteroidDto {
  @StringField({ swagger: true })
  name: string;

  @StringField({ swagger: true })
  commonNameId: string;

  @StringField({ swagger: true })
  manufacturerId: string;

  userId: string;
}
