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
import { ManufacturersService } from './manufacturers.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import {
  ManufacturerDto,
  ManufacturerQueryDto,
  UpdateManufacturerDto,
} from './dto/manufacturer.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';

@ApiBearerAuth()
@ApiTags('Manufacturers')
@Controller('manufacturers')
export class ManufacturersController {
  constructor(private readonly manufacturerService: ManufacturersService) {}

  @ApiOperation({ summary: 'Create an manufacturer' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Manufacturer successfully created.',
    type: ManufacturerDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() createManufacturerDto: CreateManufacturerDto,
    @AppUser() user: UserDto,
  ): Promise<ManufacturerDto> {
    createManufacturerDto.userId = user._id;
    return this.manufacturerService.create(createManufacturerDto);
  }

  @ApiOperation({ summary: 'List Manufacturers' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Manufacturer list loaded.',
    type: [ManufacturerDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(
    @Query() manufacturerQueryDto: ManufacturerQueryDto,
  ): Promise<ManufacturerDto[]> {
    return this.manufacturerService.find(manufacturerQueryDto);
  }

  @ApiOperation({ summary: 'Get Manufacturer By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Manufacturer By Id Loaded.',
    type: ManufacturerDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':manufacturerId')
  findById(
    @Param('manufacturerId') manufacturerId: string,
  ): Promise<ManufacturerDto> {
    return this.manufacturerService.findById(manufacturerId);
  }

  @ApiOperation({ summary: 'Get Manufacturer By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Manufacturer Updated.',
    type: ManufacturerDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put(':manufacturerId')
  update(
    @Param('manufacturerId') manufacturerId: string,
    @Body() updateManufacturerDto: UpdateManufacturerDto,
  ): Promise<ManufacturerDto> {
    return this.manufacturerService.update(
      manufacturerId,
      updateManufacturerDto,
    );
  }

  @ApiOperation({ summary: 'Delete Manufacturer By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Manufacturer Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':manufacturerId')
  deleteById(
    @Param('manufacturerId') manufacturerId: string,
  ): Promise<{ success: boolean }> {
    return this.manufacturerService.delete(manufacturerId);
  }
}
