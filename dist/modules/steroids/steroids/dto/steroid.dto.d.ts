import { BaseDto } from 'src/@base/dto/base.dto';
import { CommonNameDto } from '../../common-names/dto/common-name.dto';
import { ManufacturerDto } from '../../manufacturers/dto/manufacturer.dto';
import { Points } from 'src/@base/@shared/shared';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { CommentDto } from 'src/modules/comments/dto/comment.dto';
export declare class SteroidDto extends BaseDto {
    name: string;
    commonNameId: string;
    manufacturerId: string;
    userId: string;
}
declare const SteroidDetailDto_base: import("@nestjs/common").Type<Partial<Omit<SteroidDto, "userId" | "commonNameId" | "manufacturerId">>>;
export declare class SteroidDetailDto extends SteroidDetailDto_base {
    name: string;
    commonName: CommonNameDto;
    manufacturer: ManufacturerDto;
    points: Points[];
    user: UserDto;
    commentCount: number;
    lastComment: CommentDto;
    lastCommentUser: UserDto;
    reviewCount: number;
    lastReview: CommentDto;
    score: number;
}
declare const UpdateSteroidDto_base: import("@nestjs/common").Type<Partial<Omit<SteroidDto, "createdAt" | "updatedAt" | "_id">>>;
export declare class UpdateSteroidDto extends UpdateSteroidDto_base {
}
declare const SteroidQueryDto_base: import("@nestjs/common").Type<Partial<Omit<SteroidDto, "createdAt" | "updatedAt">>>;
export declare class SteroidQueryDto extends SteroidQueryDto_base {
    skip: number;
    limit: number;
    populate?: string[];
}
export {};
