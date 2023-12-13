import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from '../users/user.schema';
import { ReviewReferenceType } from './review-types';

export type ReviewDocument = Review & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Review extends Base {
  @Prop({ type: Boolean, required: true })
  isRated: boolean;

  @Prop({ type: String, required: true })
  comments: string;

  @Prop({
    type: String,
    required: true,
    enum: [ReviewReferenceType.STEROID, ReviewReferenceType.SOURCE],
  })
  referenceType: ReviewReferenceType;

  @Prop({ type: ObjectId, refPath: 'referenceType' })
  referenceId: mongoose.Types.ObjectId;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

ReviewSchema.pre('save', function (next) {
  next();
});
