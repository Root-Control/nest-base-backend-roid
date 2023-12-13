import { StringField } from 'src/@common/decorators/field.decorators';

export class CreateCommonNameDto {
  @StringField({ minLength: 1, maxLength: 200, swagger: true })
  name: string;

  userId: string;
}
