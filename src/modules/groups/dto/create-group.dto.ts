import {
  EnumField,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { GroupType } from '../group-types';

export class CreateGroupDto {
  @StringField({ minLength: 1, maxLength: 50, swagger: true })
  name: string;

  @StringField({ minLength: 1, swagger: true })
  description: string;

  @EnumField(() => GroupType, { swagger: true })
  type: GroupType;

  userId: string;
}
