import { BaseDto } from 'src/@base/dto/base.dto';
import { RoleType } from '../types/user.types';
export declare class UserDto extends BaseDto {
    role: RoleType;
    email: string;
    password?: string | null;
    phone: string | null;
    avatar: string | null;
    username: string;
    aboutMe: string | null;
    birthDate: Date;
    weight: number;
    height: number;
    bodyFat: number;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<Omit<UserDto, "_id" | "createdAt" | "updatedAt">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
declare const UserQueryDto_base: import("@nestjs/common").Type<Partial<Omit<UserDto, "createdAt" | "updatedAt">>>;
export declare class UserQueryDto extends UserQueryDto_base {
    skip?: number;
    limit?: number;
}
export {};
