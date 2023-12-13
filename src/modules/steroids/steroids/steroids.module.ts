import { Module } from '@nestjs/common';
import { Steroid, SteroidSchema } from './steroid.schema';
import { SteroidsService } from './steroids.service';
import { SteroidsController } from './steroids.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from 'src/modules/comments';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Steroid.name, schema: SteroidSchema }]),
    CommentsModule,
  ],
  controllers: [SteroidsController],
  providers: [SteroidsService],
})
export class SteroidsModule {}
