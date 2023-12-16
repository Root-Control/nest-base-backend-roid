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
} from '@nestjs/common';
import { SteroidsService } from './steroids.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSteroidDto } from './dto/create-steroid.dto';
import {
  SteroidDetailDto,
  SteroidDto,
  UpdateSteroidDto,
} from './dto/steroid.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';

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
  find(): Promise<SteroidDetailDto[]> {
    return this.steroidService.getDetailedSteroids();
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
  findById(@Param('steroidId') steroidId: string): Promise<SteroidDetailDto> {
    return this.steroidService.getDetailedSteroids(steroidId);
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
