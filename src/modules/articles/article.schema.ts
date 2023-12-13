import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { User } from '../users/user.schema';

export type ArticleDocument = Article & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Article extends Base {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

ArticleSchema.pre('save', function (next) {
  next();
});
