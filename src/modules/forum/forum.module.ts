import { Module } from '@nestjs/common';
import { TopicsModule } from './topics';
import { PostsModule } from './posts';

@Module({
  imports: [TopicsModule, PostsModule],
})
export class ForumModule {}
