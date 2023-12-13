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
import { CategoriesService } from './categories.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  CategoryDto,
  CategoryQueryDto,
  UpdateCategoryDto,
} from './dto/category.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @ApiOperation({ summary: 'Create an category' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Category successfully created.',
    type: CategoryDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Post()
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @AppUser() user: UserDto,
  ): Promise<CategoryDto> {
    createCategoryDto.userId = user._id;
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'List Categories' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Category list loaded.',
    type: [CategoryDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() categoryQueryDto: CategoryQueryDto): Promise<CategoryDto[]> {
    return this.categoryService.find(categoryQueryDto);
  }

  @ApiOperation({ summary: 'Get Category By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Category By Id Loaded.',
    type: CategoryDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':categoryId')
  findById(@Param('categoryId') categoryId: string): Promise<CategoryDto> {
    return this.categoryService.findById(categoryId);
  }

  @ApiOperation({ summary: 'Get Category By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Category Updated.',
    type: CategoryDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Put(':categoryId')
  update(
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryDto> {
    return this.categoryService.update(categoryId, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete Category By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Category Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Delete(':categoryId')
  deleteById(@Param('categoryId') categoryId: string): Promise<{
    success: boolean;
  }> {
    return this.categoryService.delete(categoryId);
  }
}
