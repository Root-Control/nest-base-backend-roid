import { Injectable } from '@nestjs/common';
import { Group, GroupDocument } from './group.schema';
import { GroupDto, GroupQueryDto, UpdateGroupDto } from './dto/group.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';

@Injectable()
export class GroupsService extends CrudService<
  GroupDto,
  CreateGroupDto,
  GroupQueryDto,
  UpdateGroupDto
> {
  constructor(
    @InjectModel(Group.name) readonly groupModel: Model<GroupDocument>,
  ) {
    super(groupModel, GroupDto);
  }
}
