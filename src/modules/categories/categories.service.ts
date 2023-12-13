import { Injectable, OnModuleInit } from '@nestjs/common';
import { Category, CategoryDocument } from './category.schema';
import {
  CategoryDto,
  CategoryQueryDto,
  UpdateCategoryDto,
} from './dto/category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import categories from './base-categories';

@Injectable()
export class CategoriesService
  extends CrudService<
    CategoryDto,
    CreateCategoryDto,
    CategoryQueryDto,
    UpdateCategoryDto
  >
  implements OnModuleInit
{
  constructor(
    @InjectModel(Category.name) readonly categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel, CategoryDto);
  }

  async onModuleInit() {
    const count = await this.categoryModel.countDocuments();
    if (count === 0) {
      await this.categoryModel.insertMany(categories);
    }
  }
}
