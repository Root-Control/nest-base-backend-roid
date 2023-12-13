import { Module } from '@nestjs/common';
import { CommonName, CommonNameSchema } from './common-name.schema';
import { CommonNamesService } from './common-names.service';
import { CommonNamesController } from './common-names.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommonName.name, schema: CommonNameSchema },
    ]),
  ],
  controllers: [CommonNamesController],
  providers: [CommonNamesService],
})
export class CommonNamesModule {}
