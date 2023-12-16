/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { RatingStarDocument } from './rating-star.schema';
import { RatingStarDto, RatingStarQueryDto, UpdateRatingStarDto } from './dto/rating-star.dto';
import { CreateRatingStarDto } from './dto/create-rating-star.dto';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
export declare class RatingStarsService extends CrudService<RatingStarDto, CreateRatingStarDto, RatingStarQueryDto, UpdateRatingStarDto> {
    readonly ratingStarModel: Model<RatingStarDocument>;
    constructor(ratingStarModel: Model<RatingStarDocument>);
    handleOrderCreatedEvent(createRatingStarDtos: CreateRatingStarDto[]): Promise<void>;
}
