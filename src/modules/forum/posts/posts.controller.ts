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
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto, PostQueryDto, UpdatePostDto } from './dto/post.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from 'src/modules/users/dto/user.dto';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @ApiOperation({ summary: 'Create an post' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Post successfully created.',
    type: PostDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
    @AppUser() user: UserDto,
  ): Promise<PostDto> {
    createPostDto.userId = user._id;
    return this.postService.create(createPostDto);
  }

  @ApiOperation({ summary: 'List Posts' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post list loaded.',
    type: [PostDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() postQueryDto: PostQueryDto): Promise<PostDto[]> {
    return this.postService.find(postQueryDto);
  }

  @ApiOperation({ summary: 'Get Post By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post By Id Loaded.',
    type: PostDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':postId')
  findById(@Param('postId') postId: string): Promise<PostDto> {
    return this.postService.findById(postId);
  }

  @ApiOperation({ summary: 'Get Post By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post Updated.',
    type: PostDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Put(':postId')
  update(
    @Param('postId') postId: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostDto> {
    return this.postService.update(postId, updatePostDto);
  }

  @ApiOperation({ summary: 'Delete Post By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Delete(':postId')
  deleteById(@Param('postId') postId: string): Promise<{
    success: boolean;
  }> {
    return this.postService.delete(postId);
  }
}
