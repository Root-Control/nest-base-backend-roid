import { StringField } from 'src/@common/decorators/field.decorators';

export class CreateCommentDto {
  @StringField({ minLength: 1, swagger: true })
  content: string;

  @StringField({ minLength: 1, maxLength: 100, swagger: true })
  referenceType: string;

  @StringField()
  referenceId: string;

  userId: string;
}
