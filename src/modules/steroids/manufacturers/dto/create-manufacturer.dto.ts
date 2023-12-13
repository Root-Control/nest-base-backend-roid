import { StringField } from 'src/@common/decorators/field.decorators';

export class CreateManufacturerDto {
  @StringField({ minLength: 1, maxLength: 50, swagger: true })
  name: string;

  userId: string;
}
