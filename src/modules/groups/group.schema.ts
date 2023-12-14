import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from '../users/user.schema';
import { GroupType } from './group-types';

export type GroupDocument = Group & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Group extends Base {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({
    type: String,
    required: true,
    enum: [GroupType.PRIVATE, GroupType.PUBLIC],
  })
  type: GroupType;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const GroupSchema = SchemaFactory.createForClass(Group);

GroupSchema.pre('save', function (next) {
  next();
});
