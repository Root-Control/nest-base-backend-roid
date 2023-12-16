import { BaseDto } from 'src/@base/dto/base.dto';
export declare class VoteDto extends BaseDto {
    referenceType: string;
    referenceId: string;
    upVoted: boolean;
}
declare const UpdateVoteDto_base: import("@nestjs/common").Type<Partial<Omit<VoteDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateVoteDto extends UpdateVoteDto_base {
}
declare const VoteQueryDto_base: import("@nestjs/common").Type<Partial<Omit<VoteDto, "createdAt" | "updatedAt">>>;
export declare class VoteQueryDto extends VoteQueryDto_base {
    skip: number;
    limit: number;
}
export {};
