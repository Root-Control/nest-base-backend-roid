import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    me(user: UserDto): UserDto;
}
