import { ConfigService } from '@nestjs/config';
import { TokenType } from 'src/app.constants';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { RoleType } from 'src/modules/users/types/user.types';
import { UsersService } from 'src/modules/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    private readonly configService;
    constructor(userService: UsersService, configService: ConfigService);
    validate(args: {
        userId: string;
        role: RoleType;
        type: TokenType;
    }): Promise<UserDto>;
}
export {};
