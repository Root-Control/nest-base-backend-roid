import { BaseDto } from 'src/@base/dto/base.dto';
export declare class CommonNameDto extends BaseDto {
    name: string;
}
declare const UpdateCommonNameDto_base: import("@nestjs/common").Type<Partial<Omit<CommonNameDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateCommonNameDto extends UpdateCommonNameDto_base {
}
declare const CommonNameQueryDto_base: import("@nestjs/common").Type<Partial<Omit<CommonNameDto, "createdAt" | "updatedAt">>>;
export declare class CommonNameQueryDto extends CommonNameQueryDto_base {
    skip: number;
    limit: number;
}
export {};
