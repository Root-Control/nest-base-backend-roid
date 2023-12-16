import { BaseDto } from 'src/@base/dto/base.dto';
import { GroupType } from '../group-types';
export declare class GroupDto extends BaseDto {
    name: string;
    description: string;
    type: GroupType;
}
declare const UpdateGroupDto_base: import("@nestjs/common").Type<Partial<Omit<GroupDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateGroupDto extends UpdateGroupDto_base {
}
declare const GroupQueryDto_base: import("@nestjs/common").Type<Partial<Omit<GroupDto, "createdAt" | "updatedAt">>>;
export declare class GroupQueryDto extends GroupQueryDto_base {
    skip: number;
    limit: number;
}
export {};
