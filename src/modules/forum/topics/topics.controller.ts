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
import { TopicsService } from './topics.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTopicDto } from './dto/create-topic.dto';
import { TopicDto, TopicQueryDto, UpdateTopicDto } from './dto/topic.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from 'src/modules/users/dto/user.dto';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Topics')
@Controller('topics')
export class TopicsController {
  constructor(private readonly topicService: TopicsService) {}

  @ApiOperation({ summary: 'Create an topic' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Topic successfully created.',
    type: TopicDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Post()
  create(
    @Body() createTopicDto: CreateTopicDto,
    @AppUser() user: UserDto,
  ): Promise<TopicDto> {
    createTopicDto.userId = user._id;
    return this.topicService.create(createTopicDto);
  }

  @ApiOperation({ summary: 'List Topics' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Topic list loaded.',
    type: [TopicDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() topicQueryDto: TopicQueryDto): Promise<TopicDto[]> {
    return this.topicService.find(topicQueryDto);
  }

  @ApiOperation({ summary: 'Get Topic By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Topic By Id Loaded.',
    type: TopicDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':topicId')
  findById(@Param('topicId') topicId: string): Promise<TopicDto> {
    return this.topicService.findById(topicId);
  }

  @ApiOperation({ summary: 'Get Topic By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Topic Updated.',
    type: TopicDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Put(':topicId')
  update(
    @Param('topicId') topicId: string,
    @Body() updateTopicDto: UpdateTopicDto,
  ): Promise<TopicDto> {
    return this.topicService.update(topicId, updateTopicDto);
  }

  @ApiOperation({ summary: 'Delete Topic By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Topic Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Delete(':topicId')
  deleteById(@Param('topicId') topicId: string): Promise<{
    success: boolean;
  }> {
    return this.topicService.delete(topicId);
  }
}
