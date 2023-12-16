import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { TopicDto, TopicQueryDto, UpdateTopicDto } from './dto/topic.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class TopicsController {
    private readonly topicService;
    constructor(topicService: TopicsService);
    create(createTopicDto: CreateTopicDto, user: UserDto): Promise<TopicDto>;
    find(topicQueryDto: TopicQueryDto): Promise<TopicDto[]>;
    findById(topicId: string): Promise<TopicDto>;
    update(topicId: string, updateTopicDto: UpdateTopicDto): Promise<TopicDto>;
    deleteById(topicId: string): Promise<{
        success: boolean;
    }>;
}
