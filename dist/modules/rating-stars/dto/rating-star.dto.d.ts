import { BaseDto } from 'src/@base/dto/base.dto';
import { RatingStarReferenceType } from '../rating-star-types';
export declare class RatingStarDto extends BaseDto {
    points: number;
    content: number;
    referenceId: string;
    referenceType: RatingStarReferenceType;
    categoryId: string;
    reviewId: string;
}
declare const UpdateRatingStarDto_base: import("@nestjs/common").Type<Partial<Omit<RatingStarDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateRatingStarDto extends UpdateRatingStarDto_base {
}
declare const RatingStarQueryDto_base: import("@nestjs/common").Type<Partial<Omit<RatingStarDto, "createdAt" | "updatedAt">>>;
export declare class RatingStarQueryDto extends RatingStarQueryDto_base {
    skip: number;
    limit: number;
}
export {};
