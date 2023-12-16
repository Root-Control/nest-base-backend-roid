import { BaseDto } from 'src/@base/dto/base.dto';
export declare class ManufacturerDto extends BaseDto {
    name: string;
}
declare const UpdateManufacturerDto_base: import("@nestjs/common").Type<Partial<Omit<ManufacturerDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateManufacturerDto extends UpdateManufacturerDto_base {
}
declare const ManufacturerQueryDto_base: import("@nestjs/common").Type<Partial<Omit<ManufacturerDto, "createdAt" | "updatedAt">>>;
export declare class ManufacturerQueryDto extends ManufacturerQueryDto_base {
    skip: number;
    limit: number;
}
export {};
