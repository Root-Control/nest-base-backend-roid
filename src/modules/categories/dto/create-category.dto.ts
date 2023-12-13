import {
  EnumField,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CategoryType } from '../category.types';

export class CreateCategoryDto {
  @EnumField(() => CategoryType)
  type: CategoryType;

  @StringField({ swagger: true })
  name: string;

  @StringField({ swagger: true })
  shortName: string;

  userId: string;
}
