import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from '../users/user.schema';
import { Steroid } from '../steroids/steroids/steroid.schema';
import { Source } from '../sources/source.schema';

export type VoteDocument = Vote & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Vote extends Base {
  @Prop({ type: String, required: true, enum: [Steroid.name, Source.name] })
  referenceType: string;

  @Prop({ type: ObjectId, refPath: 'referenceType' })
  referenceId: mongoose.Types.ObjectId;

  @Prop({ type: Boolean, required: true })
  upVoted: boolean;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);

VoteSchema.pre('save', function (next) {
  next();
});
