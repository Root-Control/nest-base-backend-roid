import { StringField } from 'src/@common/decorators/field.decorators';

export class CreateArticleDto {
  @StringField({ minLength: 1, maxLength: 50, swagger: true })
  title: string;

  @StringField({ minLength: 1, maxLength: 100, swagger: true })
  content: string;

  userId: string;
}
