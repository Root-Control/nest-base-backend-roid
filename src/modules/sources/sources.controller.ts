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
import { SourcesService } from './sources.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSourceDto } from './dto/create-source.dto';
import {
  SourceCommentsCountDto,
  SourceDto,
  SourceQueryDto,
  UpdateSourceDto,
} from './dto/source.dto';
import { SourcePointsDto } from './dto/source-points.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';

@ApiTags('Sources')
@Controller('sources')
export class SourcesController {
  constructor(private readonly sourceService: SourcesService) {}

  @ApiOperation({ summary: 'Create an source' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Source successfully created.',
    type: SourceDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() createSourceDto: CreateSourceDto,
    @AppUser() user: UserDto,
  ): Promise<SourceDto> {
    createSourceDto.userId = user._id;
    return this.sourceService.create(createSourceDto);
  }

  @ApiOperation({ summary: 'List Sources' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Source list loaded.',
    type: [SourceDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() sourceQueryDto: SourceQueryDto): Promise<SourceDto[]> {
    return this.sourceService.find(sourceQueryDto);
  }

  @ApiOperation({ summary: 'List Detailed Sources' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Find detailed sources + points.',
    type: [SourcePointsDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get('reviews')
  getSourceReviews(): Promise<SourcePointsDto[]> {
    return this.sourceService.getSourceReviews();
  }

  @ApiOperation({ summary: 'List Detailed Sources' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Find detailed sources + points.',
    type: [SourcePointsDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get('comments')
  getSourceComments(): Promise<SourceCommentsCountDto[]> {
    return this.sourceService.getSourceComments();
  }

  @ApiOperation({ summary: 'Get Source By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Source By Id Loaded.',
    type: SourceDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':sourceId')
  findById(@Param('sourceId') sourceId: string): Promise<SourceDto> {
    return this.sourceService.findById(sourceId);
  }

  @ApiOperation({ summary: 'Get Source By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Source Updated.',
    type: SourceDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put(':sourceId')
  update(
    @Param('sourceId') sourceId: string,
    @Body() updateSourceDto: UpdateSourceDto,
  ): Promise<SourceDto> {
    return this.sourceService.update(sourceId, updateSourceDto);
  }

  @ApiOperation({ summary: 'Delete Source By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Source Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':sourceId')
  deleteById(@Param('sourceId') sourceId: string): Promise<{
    success: boolean;
  }> {
    return this.sourceService.delete(sourceId);
  }
}
