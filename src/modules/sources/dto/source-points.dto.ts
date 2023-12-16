import {
  ClassField,
  NumberField,
} from 'src/@common/decorators/field.decorators';
import { SourceDto } from './source.dto';
import { Points } from 'src/@base/@shared/shared';
import { Exclude, Expose, Transform } from 'class-transformer';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { calculateScore } from 'src/@common/utilities/utils';

export class SourcePointsDto extends SourceDto {
  @ClassField(() => Points, { each: true })
  points: Points[];

  @ClassField(() => UserDto, { swagger: true })
  user: UserDto;

  @Exclude()
  userId: string;

  @NumberField({ swagger: true })
  @Expose()
  @Transform(({ obj }) => {
    const points = obj.points.map((point) => point.average);
    return calculateScore(points);
  })
  score: number;
}
