import { CreateRatingStarDto } from 'src/modules/rating-stars/dto/create-rating-star.dto';
import { CommentReferenceType, CommentType } from '../comment-types';
export declare class CreateCommentDto {
    isRated: boolean;
    comments: string;
    referenceId: string;
    referenceType: CommentReferenceType;
    type: CommentType;
    ratingStars?: CreateRatingStarDto[];
    userId: string;
}
