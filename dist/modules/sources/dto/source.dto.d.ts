import { Points } from 'src/@base/@shared/shared';
import { BaseDto } from 'src/@base/dto/base.dto';
import { CommentDto } from 'src/modules/comments/dto/comment.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class SourceDto extends BaseDto {
    url: string;
    description: string;
    htmlTitle: string;
    htmlInfo: string;
    sourceImage: string;
    userId: string;
}
declare const SourceDetailDto_base: import("@nestjs/common").Type<Partial<Omit<SourceDto, "userId">>>;
export declare class SourceDetailDto extends SourceDetailDto_base {
    url: string;
    description: string;
    htmlTitle: string;
    htmlInfo: string;
    user: UserDto;
    commentCount: number;
    lastComment: CommentDto;
    lastCommentUser: UserDto;
    reviewCount: number;
    lastReview: CommentDto;
    points: Points[];
    score: number;
}
declare const UpdateSourceDto_base: import("@nestjs/common").Type<Partial<Omit<SourceDto, "createdAt" | "updatedAt" | "_id">>>;
export declare class UpdateSourceDto extends UpdateSourceDto_base {
}
declare const SourceQueryDto_base: import("@nestjs/common").Type<Partial<Omit<SourceDto, "createdAt" | "updatedAt">>>;
export declare class SourceQueryDto extends SourceQueryDto_base {
    skip: number;
    limit: number;
}
export {};
