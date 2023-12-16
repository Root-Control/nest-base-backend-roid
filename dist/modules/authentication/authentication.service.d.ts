import { JwtService } from '@nestjs/jwt';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { type UserLoginDto } from './dto/user-login.dto';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { RoleType } from '../users/types/user.types';
import { UserDto } from '../users/dto/user.dto';
export declare class AuthenticationService {
    private jwtService;
    private configService;
    private userService;
    constructor(jwtService: JwtService, configService: ConfigService, userService: UsersService);
    createAccessToken(data: {
        role: RoleType;
        userId: string;
    }): Promise<TokenPayloadDto>;
    validateUser(userLoginDto: UserLoginDto): Promise<UserDto>;
}
