import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from 'src/modules/users/user.schema';
import { Category } from '../categories/category.schema';
import { RatingStarReferenceType } from './rating-star-types';
import { Comment } from '../comments/comment.schema';

export type RatingStarDocument = RatingStar & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class RatingStar extends Base {
  @Prop({ type: Number, required: false })
  points: number;

  @Prop({ type: String, required: false })
  content: string;

  @Prop({
    type: String,
    required: true,
    enum: [RatingStarReferenceType.STEROID, RatingStarReferenceType.SOURCE],
  })
  referenceType: RatingStarReferenceType;

  @Prop({ type: ObjectId, refPath: 'referenceType' })
  referenceId: mongoose.Types.ObjectId;

  @Prop({
    type: ObjectId,
    ref: Category.name,
    required: true,
  })
  categoryId: string;

  @Prop({ type: ObjectId, ref: Comment.name })
  reviewId: string;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const RatingStarSchema = SchemaFactory.createForClass(RatingStar);

RatingStarSchema.pre('save', function (next) {
  next();
});
