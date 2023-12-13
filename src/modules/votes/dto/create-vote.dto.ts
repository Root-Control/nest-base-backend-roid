import {
  BooleanField,
  StringField,
} from 'src/@common/decorators/field.decorators';

export class CreateVoteDto {
  @StringField({ swagger: true })
  referenceType: string;

  @StringField({ swagger: true })
  referenceId: string;

  @BooleanField({ swagger: true })
  upVoted: boolean;

  userId: string;
}
