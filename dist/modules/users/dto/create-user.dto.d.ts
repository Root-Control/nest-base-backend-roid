import { RoleType } from '../types/user.types';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    aboutMe: string;
    birthDate: Date;
    weight: number;
    height: number;
    bodyFat: number;
    avatar?: string;
    phone?: string;
    role?: RoleType;
}
