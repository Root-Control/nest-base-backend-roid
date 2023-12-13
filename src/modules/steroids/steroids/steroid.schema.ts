import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
import { Manufacturer } from '../manufacturers/manufacturer.schema';
import { CommonName } from '../common-names/common-name.schema';
import { User } from 'src/modules/users/user.schema';

export type SteroidDocument = Steroid & mongoose.Document;

const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({ autoCreate: true })
export class Steroid extends Base {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: ObjectId, ref: CommonName.name })
  commonNameId: string;

  @Prop({ type: ObjectId, ref: Manufacturer.name })
  manufacturerId: string;

  @Prop({ type: ObjectId, ref: User.name })
  userId: mongoose.Types.ObjectId;
}

export const SteroidSchema = SchemaFactory.createForClass(Steroid);

SteroidSchema.pre('save', function (next) {
  next();
});
