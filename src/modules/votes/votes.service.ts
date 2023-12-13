import { Injectable } from '@nestjs/common';
import { Vote, VoteDocument } from './vote.schema';
import {
  VoteDto,
  VoteQueryDto,
  UpdateVoteDto,
} from './dto/vote.dto';
import { CreateVoteDto } from './dto/create-vote.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';

@Injectable()
export class VotesService extends CrudService<
  VoteDto,
  CreateVoteDto,
  VoteQueryDto,
  UpdateVoteDto
> {
  constructor(
    @InjectModel(Vote.name) readonly voteModel: Model<VoteDocument>,
  ) {
    super(voteModel, VoteDto);
  }
}
