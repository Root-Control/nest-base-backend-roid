import { Injectable } from '@nestjs/common';
import { Topic, TopicDocument } from './topic.schema';
import { TopicDto, TopicQueryDto, UpdateTopicDto } from './dto/topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';

@Injectable()
export class TopicsService extends CrudService<
  TopicDto,
  CreateTopicDto,
  TopicQueryDto,
  UpdateTopicDto
> {
  constructor(
    @InjectModel(Topic.name) readonly topicModel: Model<TopicDocument>,
  ) {
    super(topicModel, TopicDto);
  }
}
