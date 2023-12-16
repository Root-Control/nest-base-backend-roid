import { BaseDto } from 'src/@base/dto/base.dto';
import { CategoryType } from '../category.types';
export declare class CategoryDto extends BaseDto {
    type: CategoryType;
    name: string;
    shortName: string;
}
declare const UpdateCategoryDto_base: import("@nestjs/common").Type<Partial<Omit<CategoryDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateCategoryDto extends UpdateCategoryDto_base {
}
declare const CategoryQueryDto_base: import("@nestjs/common").Type<Partial<Omit<CategoryDto, "createdAt" | "updatedAt">>>;
export declare class CategoryQueryDto extends CategoryQueryDto_base {
    skip: number;
    limit: number;
}
export {};
