import { LoginPayloadDto } from './dto/login-payload.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from '../users/users.service';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private userService;
    private authenticationService;
    constructor(userService: UsersService, authenticationService: AuthenticationService);
    userLogin(userLoginDto: UserLoginDto): Promise<LoginPayloadDto>;
    userRegister(createUserDto: CreateUserDto): Promise<LoginPayloadDto>;
}
