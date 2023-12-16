import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryDto, CategoryQueryDto, UpdateCategoryDto } from './dto/category.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto, user: UserDto): Promise<CategoryDto>;
    find(categoryQueryDto: CategoryQueryDto): Promise<CategoryDto[]>;
    findById(categoryId: string): Promise<CategoryDto>;
    update(categoryId: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryDto>;
    deleteById(categoryId: string): Promise<{
        success: boolean;
    }>;
}
