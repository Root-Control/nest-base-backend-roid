import { RatingStarReferenceType } from '../rating-star-types';
export declare class CreateRatingStarDto {
    points: number;
    content: number;
    referenceId: string;
    referenceType: RatingStarReferenceType;
    categoryId: string;
    reviewId: string;
    userId: string;
}
