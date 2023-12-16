import { BaseDto } from 'src/@base/dto/base.dto';
export declare class ArticleDto extends BaseDto {
    title: string;
    content: string;
}
declare const UpdateArticleDto_base: import("@nestjs/common").Type<Partial<Omit<ArticleDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateArticleDto extends UpdateArticleDto_base {
}
declare const ArticleQueryDto_base: import("@nestjs/common").Type<Partial<Omit<ArticleDto, "createdAt" | "updatedAt">>>;
export declare class ArticleQueryDto extends ArticleQueryDto_base {
    skip: number;
    limit: number;
}
export {};
