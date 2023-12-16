import { BaseDto } from 'src/@base/dto/base.dto';
import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';
import { CommentType } from '../comment-types';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class CommentDto extends BaseDto {
    comments: string;
    referenceId: string;
    referenceType: string;
    userId: UserDto;
    user: UserDto;
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
    populate: string[];
}
export {};
