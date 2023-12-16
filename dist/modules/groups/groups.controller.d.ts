import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupDto, GroupQueryDto, UpdateGroupDto } from './dto/group.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class GroupsController {
    private readonly groupService;
    constructor(groupService: GroupsService);
    create(createGroupDto: CreateGroupDto, user: UserDto): Promise<GroupDto>;
    find(groupQueryDto: GroupQueryDto): Promise<GroupDto[]>;
    findById(groupId: string): Promise<GroupDto>;
    update(groupId: string, updateGroupDto: UpdateGroupDto): Promise<GroupDto>;
    deleteById(groupId: string): Promise<{
        success: boolean;
    }>;
}
