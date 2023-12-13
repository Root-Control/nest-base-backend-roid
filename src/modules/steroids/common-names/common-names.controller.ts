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
import { CommonNamesService } from './common-names.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCommonNameDto } from './dto/create-common-name.dto';
import {
  CommonNameDto,
  CommonNameQueryDto,
  UpdateCommonNameDto,
} from './dto/common-name.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';

@ApiBearerAuth()
@ApiTags('Common Names')
@Controller('common-names')
export class CommonNamesController {
  constructor(private readonly commonNameService: CommonNamesService) {}

  @ApiOperation({ summary: 'Create an commonName' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'CommonName successfully created.',
    type: CommonNameDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() createCommonNameDto: CreateCommonNameDto,
    @AppUser() user: UserDto,
  ): Promise<CommonNameDto> {
    createCommonNameDto.userId = user._id;
    return this.commonNameService.create(createCommonNameDto);
  }

  @ApiOperation({ summary: 'List CommonNames' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CommonName list loaded.',
    type: [CommonNameDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(
    @Query() commonNameQueryDto: CommonNameQueryDto,
  ): Promise<CommonNameDto[]> {
    return this.commonNameService.find(commonNameQueryDto);
  }

  @ApiOperation({ summary: 'Get CommonName By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CommonName By Id Loaded.',
    type: CommonNameDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':commonNameId')
  findById(
    @Param('commonNameId') commonNameId: string,
  ): Promise<CommonNameDto> {
    return this.commonNameService.findById(commonNameId);
  }

  @ApiOperation({ summary: 'Get CommonName By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CommonName Updated.',
    type: CommonNameDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put(':commonNameId')
  update(
    @Param('commonNameId') commonNameId: string,
    @Body() updateCommonNameDto: UpdateCommonNameDto,
  ): Promise<CommonNameDto> {
    return this.commonNameService.update(commonNameId, updateCommonNameDto);
  }

  @ApiOperation({ summary: 'Delete CommonName By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CommonName Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':commonNameId')
  deleteById(
    @Param('commonNameId') commonNameId: string,
  ): Promise<{ success: boolean }> {
    return this.commonNameService.delete(commonNameId);
  }
}
