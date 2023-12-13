import { Module } from '@nestjs/common';
import { Vote, VoteSchema } from './vote.schema';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
  ],
  controllers: [VotesController],
  providers: [VotesService],
})
export class VotesModule {}
