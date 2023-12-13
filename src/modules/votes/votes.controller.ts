import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Get,
  Put,
  Query,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VotesService } from './votes.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVoteDto } from './dto/create-vote.dto';
import { VoteDto, VoteQueryDto, UpdateVoteDto } from './dto/vote.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';

@ApiTags('Votes')
@Controller('votes')
export class VotesController {
  constructor(private readonly voteService: VotesService) {}

  @ApiOperation({ summary: 'Create an vote' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Vote successfully created.',
    type: VoteDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() createVoteDto: CreateVoteDto,
    @AppUser() user: UserDto,
  ): Promise<VoteDto> {
    createVoteDto.userId = user._id;
    return this.voteService.create(createVoteDto);
  }

  @ApiOperation({ summary: 'List Votes' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Vote list loaded.',
    type: [VoteDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() voteQueryDto: VoteQueryDto): Promise<VoteDto[]> {
    return this.voteService.find(voteQueryDto);
  }

  @ApiOperation({ summary: 'Get Vote By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Vote By Id Loaded.',
    type: VoteDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':voteId')
  findById(@Param('voteId') voteId: string): Promise<VoteDto> {
    return this.voteService.findById(voteId);
  }

  @ApiOperation({ summary: 'Get Vote By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Vote Updated.',
    type: VoteDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Put(':voteId')
  update(
    @Param('voteId') voteId: string,
    @Body() updateVoteDto: UpdateVoteDto,
  ): Promise<VoteDto> {
    return this.voteService.update(voteId, updateVoteDto);
  }

  @ApiOperation({ summary: 'Delete Vote By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Vote Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Delete(':voteId')
  deleteById(@Param('voteId') voteId: string): Promise<{
    success: boolean;
  }> {
    return this.voteService.delete(voteId);
  }
}
