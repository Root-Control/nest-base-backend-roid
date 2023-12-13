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
import { ReviewsService } from './reviews.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewDto, ReviewQueryDto, UpdateReviewDto } from './dto/review.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewService: ReviewsService) {}

  @ApiOperation({ summary: 'Create an review' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Review successfully created.',
    type: ReviewDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createReviewDto: CreateReviewDto): Promise<ReviewDto> {
    return this.reviewService.createReview(createReviewDto);
  }

  @ApiOperation({ summary: 'List Reviews' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Review list loaded.',
    type: [ReviewDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() reviewQueryDto: ReviewQueryDto): Promise<ReviewDto[]> {
    return this.reviewService.find(reviewQueryDto);
  }

  @ApiOperation({ summary: 'Get Review By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Review By Id Loaded.',
    type: ReviewDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':reviewId')
  findById(@Param('reviewId') reviewId: string): Promise<ReviewDto> {
    return this.reviewService.findById(reviewId);
  }

  @ApiOperation({ summary: 'Get Review By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Review Updated.',
    type: ReviewDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put(':reviewId')
  update(
    @Param('reviewId') reviewId: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ): Promise<ReviewDto> {
    return this.reviewService.update(reviewId, updateReviewDto);
  }

  @ApiOperation({ summary: 'Delete Review By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Review Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':reviewId')
  deleteById(@Param('reviewId') reviewId: string): Promise<{
    success: boolean;
  }> {
    return this.reviewService.delete(reviewId);
  }
}
