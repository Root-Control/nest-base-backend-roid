"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteroidsModule = void 0;
const common_1 = require("@nestjs/common");
const steroid_schema_1 = require("./steroid.schema");
const steroids_service_1 = require("./steroids.service");
const steroids_controller_1 = require("./steroids.controller");
const mongoose_1 = require("@nestjs/mongoose");
const comments_1 = require("../../comments");
let SteroidsModule = class SteroidsModule {
};
exports.SteroidsModule = SteroidsModule;
exports.SteroidsModule = SteroidsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: steroid_schema_1.Steroid.name, schema: steroid_schema_1.SteroidSchema }]),
            comments_1.CommentsModule,
        ],
        controllers: [steroids_controller_1.SteroidsController],
        providers: [steroids_service_1.SteroidsService],
    })
], SteroidsModule);
//# sourceMappingURL=steroids.module.js.map