import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';

export type CommonNameDocument = CommonName & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class CommonName extends Base {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: ObjectId, ref: 'User' })
  userId:any;
}

export const CommonNameSchema = SchemaFactory.createForClass(CommonName);

CommonNameSchema.pre('save', function (next) {
  next();
});
