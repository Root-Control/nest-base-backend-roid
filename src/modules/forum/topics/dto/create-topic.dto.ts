import { StringField } from 'src/@common/decorators/field.decorators';

export class CreateTopicDto {
  @StringField({ swagger: true })
  name: string;

  @StringField({ swagger: true })
  description: string;

  userId: string;
}
