import { UserDto } from 'src/modules/users/dto/user.dto';
import { TokenPayloadDto } from './token-payload.dto';
export declare class LoginPayloadDto {
    user: UserDto;
    token: TokenPayloadDto;
    constructor(user: UserDto, token: TokenPayloadDto);
}
