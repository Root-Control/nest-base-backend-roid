import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from '../users/user.schema';

export type SourceDocument = Source & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Source extends Base {
  @Prop({ type: String, required: true })
  url: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, default: 'Important Information' })
  htmlTitle: string;

  @Prop({ type: String })
  htmlInfo: string;

  @Prop({ type: String, required: false })
  sourceImage: string;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const SourceSchema = SchemaFactory.createForClass(Source);

SourceSchema.pre('save', function (next) {
  next();
});
