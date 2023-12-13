import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { CategoryType } from './category.types';
import { User } from '../users/user.schema';

export type CategoryDocument = Category & mongoose.Document;
const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Category extends Base {
  @Prop({
    type: String,
    required: true,
    enum: [CategoryType.SOURCE, CategoryType.STEROID],
  })
  type: CategoryType;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  shortName: string;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.pre('save', function (next) {
  next();
});
