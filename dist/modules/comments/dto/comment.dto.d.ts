import { BaseDto } from 'src/@base/dto/base.dto';
import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';
import { CommentType } from '../comment-types';
export declare class CommentDto extends BaseDto {
    isRated: boolean;
    comments: string;
    referenceId: string;
    type: CommentType;
    ratingStars: CreateRatingStarDto[];
}
declare const UpdateCommentDto_base: import("@nestjs/common").Type<Partial<Omit<CommentDto, "_id" | "createdAt" | "updatedAt" | "ratingStars">>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
}
declare const CommentQueryDto_base: import("@nestjs/common").Type<Partial<Omit<CommentDto, "createdAt" | "updatedAt" | "ratingStars">>>;
export declare class CommentQueryDto extends CommentQueryDto_base {
    skip: number;
    limit: number;
}
export {};
