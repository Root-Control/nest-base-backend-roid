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
import { CommentsService } from './comments.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCommentDto } from './dto/create-comment.dto';
import {
  CommentDto,
  CommentQueryDto,
  UpdateCommentDto,
} from './dto/comment.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @ApiOperation({ summary: 'Create an comment' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Comment successfully created.',
    type: CommentDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createCommentDto: CreateCommentDto): Promise<CommentDto> {
    return this.commentService.createComment(createCommentDto);
  }

  @ApiOperation({ summary: 'List Comments' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment list loaded.',
    type: [CommentDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() commentQueryDto: CommentQueryDto): Promise<CommentDto[]> {
    return this.commentService.find(commentQueryDto);
  }

  @ApiOperation({ summary: 'Get Comment By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment By Id Loaded.',
    type: CommentDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':commentId')
  findById(@Param('commentId') commentId: string): Promise<CommentDto> {
    return this.commentService.findById(commentId);
  }

  @ApiOperation({ summary: 'Get Comment By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment Updated.',
    type: CommentDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put(':commentId')
  update(
    @Param('commentId') commentId: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<CommentDto> {
    return this.commentService.update(commentId, updateCommentDto);
  }

  @ApiOperation({ summary: 'Delete Comment By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':commentId')
  deleteById(@Param('commentId') commentId: string): Promise<{
    success: boolean;
  }> {
    return this.commentService.delete(commentId);
  }
}
