import {
  StringField,
  StringFieldOptional,
} from 'src/@common/decorators/field.decorators';

export class CreateSourceDto {
  @StringField({ minLength: 1, maxLength: 100, swagger: true })
  url: string;

  @StringFieldOptional({ minLength: 1, swagger: true })
  htmlTitle: string;

  @StringFieldOptional({ minLength: 1, swagger: true })
  htmlInfo: string;

  @StringFieldOptional({ minLength: 1, swagger: true })
  description: string;

  userId: string;
}
