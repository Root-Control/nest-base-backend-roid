"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const groups_module_1 = require("./modules/groups/groups.module");
const votes_module_1 = require("./modules/votes/votes.module");
const comments_module_1 = require("./modules/comments/comments.module");
const sources_module_1 = require("./modules/sources/sources.module");
const categories_module_1 = require("./modules/categories/categories.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const articles_1 = require("./modules/articles");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./modules/users/users.module");
const authentication_module_1 = require("./modules/authentication/authentication.module");
const steroids_module_1 = require("./modules/steroids/steroids.module");
const config_2 = require("./@common/env-configuration/config");
const rating_stars_1 = require("./modules/rating-stars");
const event_emitter_1 = require("@nestjs/event-emitter");
const forum_module_1 = require("./modules/forum/forum.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply((req, res, next) => {
            next();
        })
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            event_emitter_1.EventEmitterModule.forRoot(),
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [config_2.default] }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    const dbConfig = configService.get('db');
                    return {
                        uri: dbConfig.connectionString,
                    };
                },
                inject: [config_1.ConfigService],
            }),
            articles_1.ArticlesModule,
            users_module_1.UsersModule,
            authentication_module_1.AuthenticationModule,
            steroids_module_1._SteroidsModule,
            categories_module_1.CategoriesModule,
            sources_module_1.SourcesModule,
            rating_stars_1.RatingStarsModule,
            comments_module_1.CommentsModule,
            votes_module_1.VotesModule,
            forum_module_1.ForumModule,
            groups_module_1.GroupsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map