import { Module } from '@nestjs/common';
import { RatingStar, RatingStarSchema } from './rating-star.schema';
import { RatingStarsService } from './rating-stars.service';
import { RatingStarsController } from './rating-stars.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RatingStar.name, schema: RatingStarSchema },
    ]),
  ],
  controllers: [RatingStarsController],
  providers: [RatingStarsService],
})
export class RatingStarsModule {}
