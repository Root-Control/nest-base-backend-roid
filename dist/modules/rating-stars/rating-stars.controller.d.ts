import { RatingStarsService } from './rating-stars.service';
import { CreateRatingStarDto } from './dto/create-rating-star.dto';
import { RatingStarDto, RatingStarQueryDto, UpdateRatingStarDto } from './dto/rating-star.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class RatingStarsController {
    private readonly ratingStarService;
    constructor(ratingStarService: RatingStarsService);
    create(createRatingStarDto: CreateRatingStarDto, user: UserDto): Promise<RatingStarDto>;
    find(ratingStarQueryDto: RatingStarQueryDto): Promise<RatingStarDto[]>;
    findById(ratingStarId: string): Promise<RatingStarDto>;
    update(ratingStarId: string, updateRatingStarDto: UpdateRatingStarDto): Promise<RatingStarDto>;
    deleteById(ratingStarId: string): Promise<{
        success: boolean;
    }>;
}
