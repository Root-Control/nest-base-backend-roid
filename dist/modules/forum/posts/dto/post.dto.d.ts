import { BaseDto } from 'src/@base/dto/base.dto';
export declare class PostDto extends BaseDto {
    title: string;
    content: string;
}
declare const UpdatePostDto_base: import("@nestjs/common").Type<Partial<Omit<PostDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
}
declare const PostQueryDto_base: import("@nestjs/common").Type<Partial<Omit<PostDto, "createdAt" | "updatedAt">>>;
export declare class PostQueryDto extends PostQueryDto_base {
    skip: number;
    limit: number;
}
export {};
