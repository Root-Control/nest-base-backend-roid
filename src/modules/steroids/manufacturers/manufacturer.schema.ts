import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';

export type ManufacturerDocument = Manufacturer & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Manufacturer extends Base {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: ObjectId, ref: 'User' })
  userId:any;
}

export const ManufacturerSchema = SchemaFactory.createForClass(Manufacturer);

ManufacturerSchema.pre('save', function (next) {
  next();
});
