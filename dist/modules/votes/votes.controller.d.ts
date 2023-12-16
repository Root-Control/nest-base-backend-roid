import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { VoteDto, VoteQueryDto, UpdateVoteDto } from './dto/vote.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class VotesController {
    private readonly voteService;
    constructor(voteService: VotesService);
    create(createVoteDto: CreateVoteDto, user: UserDto): Promise<VoteDto>;
    find(voteQueryDto: VoteQueryDto): Promise<VoteDto[]>;
    findById(voteId: string): Promise<VoteDto>;
    update(voteId: string, updateVoteDto: UpdateVoteDto): Promise<VoteDto>;
    deleteById(voteId: string): Promise<{
        success: boolean;
    }>;
}
