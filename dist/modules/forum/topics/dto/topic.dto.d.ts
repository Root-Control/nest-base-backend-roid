import { BaseDto } from 'src/@base/dto/base.dto';
export declare class TopicDto extends BaseDto {
    name: string;
    description: string;
}
declare const UpdateTopicDto_base: import("@nestjs/common").Type<Partial<Omit<TopicDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateTopicDto extends UpdateTopicDto_base {
}
declare const TopicQueryDto_base: import("@nestjs/common").Type<Partial<Omit<TopicDto, "createdAt" | "updatedAt">>>;
export declare class TopicQueryDto extends TopicQueryDto_base {
    skip: number;
    limit: number;
}
export {};
