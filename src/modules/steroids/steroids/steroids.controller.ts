import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Get,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SteroidsService } from './steroids.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSteroidDto } from './dto/create-steroid.dto';
import {
  SteroidCommentsCountDto,
  SteroidDto,
  SteroidQueryDto,
  UpdateSteroidDto,
} from './dto/steroid.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { SteroidPointsDto } from './dto/steroid-points.dto';

@ApiTags('Steroids')
@Controller('steroids')
export class SteroidsController {
  constructor(private readonly steroidService: SteroidsService) {}

  @ApiOperation({ summary: 'Create an steroid' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Steroid successfully created.',
    type: SteroidDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() createSteroidDto: CreateSteroidDto,
    @AppUser() user: UserDto,
  ): Promise<SteroidDto> {
    createSteroidDto.userId = user._id;
    return this.steroidService.create(createSteroidDto);
  }

  @ApiOperation({ summary: 'List Steroids' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Steroid list loaded.',
    type: [SteroidDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() steroidQueryDto: SteroidQueryDto): Promise<SteroidDto[]> {
    return this.steroidService.find(steroidQueryDto);
  }

  @ApiOperation({ summary: 'List Steroids' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Steroid list loaded.',
    type: [SteroidPointsDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get('reviews')
  getSteroidReviews(): Promise<SteroidPointsDto[]> {
    return this.steroidService.getSteroidReviews();
  }

  @ApiOperation({ summary: 'List Steroids' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Steroid list loaded.',
    type: [SteroidCommentsCountDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get('comments')
  getSteroidComments(): Promise<SteroidCommentsCountDto[]> {
    return this.steroidService.getSteroidComments();
  }

  @ApiOperation({ summary: 'Get Steroid By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Steroid By Id Loaded.',
    type: SteroidDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':steroidId')
  findById(@Param('steroidId') steroidId: string): Promise<SteroidDto> {
    return this.steroidService.findById(steroidId);
  }

  @ApiOperation({ summary: 'Get Steroid By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Steroid Updated.',
    type: SteroidDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put(':steroidId')
  update(
    @Param('steroidId') steroidId: string,
    @Body() updateSteroidDto: UpdateSteroidDto,
  ): Promise<SteroidDto> {
    return this.steroidService.update(steroidId, updateSteroidDto);
  }

  @ApiOperation({ summary: 'Delete Steroid By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Steroid Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':steroidId')
  deleteById(
    @Param('steroidId') steroidId: string,
  ): Promise<{ success: boolean }> {
    return this.steroidService.delete(steroidId);
  }
}
