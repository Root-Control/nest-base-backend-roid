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
import { ArticlesService } from './articles.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateArticleDto } from './dto/create-article.dto';
import {
  ArticleDto,
  ArticleQueryDto,
  UpdateArticleDto,
} from './dto/article.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @ApiOperation({ summary: 'Create an article' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Article successfully created.',
    type: ArticleDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Post()
  create(
    @Body() createArticleDto: CreateArticleDto,
    @AppUser() user: UserDto,
  ): Promise<ArticleDto> {
    createArticleDto.userId = user._id;
    return this.articleService.create(createArticleDto);
  }

  @ApiOperation({ summary: 'List Articles' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article list loaded.',
    type: [ArticleDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() articleQueryDto: ArticleQueryDto): Promise<ArticleDto[]> {
    return this.articleService.find(articleQueryDto);
  }

  @ApiOperation({ summary: 'Get Article By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article By Id Loaded.',
    type: ArticleDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':articleId')
  findById(@Param('articleId') articleId: string): Promise<ArticleDto> {
    return this.articleService.findById(articleId);
  }

  @ApiOperation({ summary: 'Get Article By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article Updated.',
    type: ArticleDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Put(':articleId')
  update(
    @Param('articleId') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<ArticleDto> {
    return this.articleService.update(articleId, updateArticleDto);
  }

  @ApiOperation({ summary: 'Delete Article By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Delete(':articleId')
  deleteById(@Param('articleId') articleId: string): Promise<{
    success: boolean;
  }> {
    return this.articleService.delete(articleId);
  }
}
