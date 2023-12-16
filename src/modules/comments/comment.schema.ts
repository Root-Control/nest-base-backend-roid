import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from '../users/user.schema';
import { CommentReferenceType, CommentType } from './comment-types';

export type CommentDocument = Comment & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Comment extends Base {
  @Prop({ type: Boolean, required: true })
  isRated: boolean;

  @Prop({ type: String, required: true })
  comments: string;

  @Prop({
    type: String,
    enum: [CommentType.COMMENT, CommentType.REVIEW, CommentType.POST],
  })
  type: CommentType;

  @Prop({
    type: String,
    required: true,
    enum: [
      CommentReferenceType.STEROID,
      CommentReferenceType.SOURCE,
      CommentReferenceType.POST,
    ],
  })
  referenceType: CommentReferenceType;

  @Prop({ type: ObjectId, refPath: 'referenceType' })
  referenceId: mongoose.Types.ObjectId;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

CommentSchema.pre('save', function (next) {
  next();
});
