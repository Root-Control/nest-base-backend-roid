import { GroupsModule } from './modules/groups/groups.module';
import { VotesModule } from './modules/votes/votes.module';
import { CommentsModule } from './modules/comments/comments.module';
import { SourcesModule } from './modules/sources/sources.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ArticlesModule } from './modules/articles';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DbConfig } from './@common/env-configuration/config.type';
import { _SteroidsModule } from './modules/steroids/steroids.module';
import config from './@common/env-configuration/config';
import { RatingStarsModule } from './modules/rating-stars';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ForumModule } from './modules/forum/forum.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const dbConfig = configService.get<DbConfig>('db');
        return {
          uri: dbConfig.connectionString,
        };
      },
      inject: [ConfigService],
    }),
    ArticlesModule,
    UsersModule,
    AuthenticationModule,
    _SteroidsModule,
    CategoriesModule,
    SourcesModule,
    RatingStarsModule,
    CommentsModule,
    VotesModule,
    ForumModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        next();
      })
      .forRoutes('*');
  }
}
