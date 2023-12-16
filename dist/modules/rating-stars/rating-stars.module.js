"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingStarsModule = void 0;
const common_1 = require("@nestjs/common");
const rating_star_schema_1 = require("./rating-star.schema");
const rating_stars_service_1 = require("./rating-stars.service");
const rating_stars_controller_1 = require("./rating-stars.controller");
const mongoose_1 = require("@nestjs/mongoose");
let RatingStarsModule = class RatingStarsModule {
};
exports.RatingStarsModule = RatingStarsModule;
exports.RatingStarsModule = RatingStarsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: rating_star_schema_1.RatingStar.name, schema: rating_star_schema_1.RatingStarSchema },
            ]),
        ],
        controllers: [rating_stars_controller_1.RatingStarsController],
        providers: [rating_stars_service_1.RatingStarsService],
    })
], RatingStarsModule);
//# sourceMappingURL=rating-stars.module.js.map