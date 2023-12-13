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
import { RatingStarsService } from './rating-stars.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRatingStarDto } from './dto/create-rating-star.dto';
import {
  RatingStarDto,
  RatingStarQueryDto,
  UpdateRatingStarDto,
} from './dto/rating-star.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';

@ApiTags('RatingStars')
@Controller('rating-stars')
export class RatingStarsController {
  constructor(private readonly ratingStarService: RatingStarsService) {}

  @ApiOperation({ summary: 'Create a RatingStar' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'RatingStar successfully created.',
    type: RatingStarDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() createRatingStarDto: CreateRatingStarDto,
    @AppUser() user: UserDto,
  ): Promise<RatingStarDto> {
    createRatingStarDto.userId = user._id;
    return this.ratingStarService.create(createRatingStarDto);
  }

  @ApiOperation({ summary: 'List RatingStars' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'RatingStar list loaded.',
    type: [RatingStarDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(
    @Query() ratingStarQueryDto: RatingStarQueryDto,
  ): Promise<RatingStarDto[]> {
    return this.ratingStarService.find(ratingStarQueryDto);
  }

  @ApiOperation({ summary: 'Get RatingStar By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'RatingStar By Id Loaded.',
    type: RatingStarDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':ratingStarId')
  findById(
    @Param('ratingStarId') ratingStarId: string,
  ): Promise<RatingStarDto> {
    return this.ratingStarService.findById(ratingStarId);
  }

  @ApiOperation({ summary: 'Get RatingStar By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'RatingStar Updated.',
    type: RatingStarDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put(':ratingStarId')
  update(
    @Param('ratingStarId') ratingStarId: string,
    @Body() updateRatingStarDto: UpdateRatingStarDto,
  ): Promise<RatingStarDto> {
    return this.ratingStarService.update(ratingStarId, updateRatingStarDto);
  }

  @ApiOperation({ summary: 'Delete RatingStar By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'RatingStar Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':ratingStarId')
  deleteById(@Param('ratingStarId') ratingStarId: string): Promise<{
    success: boolean;
  }> {
    return this.ratingStarService.delete(ratingStarId);
  }
}
