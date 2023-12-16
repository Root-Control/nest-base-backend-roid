"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteroidsService = void 0;
const common_1 = require("@nestjs/common");
const steroid_schema_1 = require("./steroid.schema");
const steroid_dto_1 = require("./dto/steroid.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crud_generic_1 = require("../../../@base/generics/crud-generic");
const class_transformer_1 = require("class-transformer");
const steroids_aggregations_1 = require("./aggregations/steroids.aggregations");
let SteroidsService = class SteroidsService extends crud_generic_1.CrudService {
    constructor(steroidModel) {
        super(steroidModel, steroid_dto_1.SteroidDto);
        this.steroidModel = steroidModel;
    }
    async getDetailedSteroids(steroidId) {
        const steroidReviews = await this.steroidModel.aggregate((0, steroids_aggregations_1.steroidReviewsAggregation)(steroidId));
        const steroidReviewDtos = steroidReviews.map((steroid) => (0, class_transformer_1.plainToClass)(steroid_dto_1.SteroidDetailDto, steroid));
        const steroids = steroidReviewDtos.sort((rev1, rev2) => rev2.score - rev1.score);
        if (steroidId && steroidReviews.length) {
            const [steroid] = steroids;
            return steroid;
        }
        return steroidReviewDtos;
    }
};
exports.SteroidsService = SteroidsService;
exports.SteroidsService = SteroidsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(steroid_schema_1.Steroid.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SteroidsService);
//# sourceMappingURL=steroids.service.js.map