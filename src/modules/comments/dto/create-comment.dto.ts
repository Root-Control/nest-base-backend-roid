import {
  BooleanFieldOptional,
  ClassFieldOptional,
  EnumField,
  StringField,
} from 'src/@common/decorators/field.decorators';
import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';
import { CommentReferenceType, CommentType } from '../comment-types';
import { Transform } from 'class-transformer';

export class CreateCommentDto {
  @BooleanFieldOptional()
  isRated: boolean;

  @StringField({ swagger: true })
  comments: string;

  @StringField({ swagger: true })
  referenceId: string;

  @EnumField(() => CommentReferenceType, { swagger: true })
  referenceType: CommentReferenceType;

  @EnumField(() => CommentType, { swagger: true })
  type: CommentType;

  @ClassFieldOptional(() => CreateRatingStarDto, { each: true, swagger: true })
  @Transform(({ obj, value }) => {
    value.forEach((val: any) => {
      val.referenceType = obj.referenceType;
      val.referenceId = obj.referenceId;
    });
    return value;
  })
  ratingStars?: CreateRatingStarDto[];

  userId: string;
}
