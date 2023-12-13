import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { AuthGuard } from '@nestjs/passport';
@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get User Details' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CommonName list loaded.',
    type: UserDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@AppUser() user: UserDto): UserDto {
    return user;
  }
}
