import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Get,
  Put,
  Query,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupDto, GroupQueryDto, UpdateGroupDto } from './dto/group.dto';
import { AuthGuard } from '@nestjs/passport';
import { AppUser } from 'src/@common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Groups')
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupService: GroupsService) {}

  @ApiOperation({ summary: 'Create an group' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Group successfully created.',
    type: GroupDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Post()
  create(
    @Body() createGroupDto: CreateGroupDto,
    @AppUser() user: UserDto,
  ): Promise<GroupDto> {
    createGroupDto.userId = user._id;
    return this.groupService.create(createGroupDto);
  }

  @ApiOperation({ summary: 'List Groups' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Group list loaded.',
    type: [GroupDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get()
  find(@Query() groupQueryDto: GroupQueryDto): Promise<GroupDto[]> {
    return this.groupService.find(groupQueryDto);
  }

  @ApiOperation({ summary: 'Get Group By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Group By Id Loaded.',
    type: GroupDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Get(':groupId')
  findById(@Param('groupId') groupId: string): Promise<GroupDto> {
    return this.groupService.findById(groupId);
  }

  @ApiOperation({ summary: 'Get Group By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Group Updated.',
    type: GroupDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Put(':groupId')
  update(
    @Param('groupId') groupId: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ): Promise<GroupDto> {
    return this.groupService.update(groupId, updateGroupDto);
  }

  @ApiOperation({ summary: 'Delete Group By Id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Group Deleted.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request.',
  })
  @Delete(':groupId')
  deleteById(@Param('groupId') groupId: string): Promise<{
    success: boolean;
  }> {
    return this.groupService.delete(groupId);
  }
}
