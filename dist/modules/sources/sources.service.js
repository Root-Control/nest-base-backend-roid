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
exports.SourcesService = void 0;
const common_1 = require("@nestjs/common");
const source_schema_1 = require("./source.schema");
const source_dto_1 = require("./dto/source.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crud_generic_1 = require("../../@base/generics/crud-generic");
const class_transformer_1 = require("class-transformer");
const sources_aggregations_1 = require("./aggregations/sources.aggregations");
let SourcesService = class SourcesService extends crud_generic_1.CrudService {
    constructor(sourceModel) {
        super(sourceModel, source_dto_1.SourceDto);
        this.sourceModel = sourceModel;
    }
    async getDetailedSources(sourceId) {
        const sourceReviews = await this.sourceModel.aggregate((0, sources_aggregations_1.sourceReviewsAggregation)(sourceId));
        const sourceReviewsDtos = sourceReviews.map((res) => (0, class_transformer_1.plainToClass)(source_dto_1.SourceDetailDto, res));
        const sources = sourceReviewsDtos.sort((rev1, rev2) => rev2.score - rev1.score);
        if (sourceId && sources.length) {
            const [source, ...res] = sources;
            return source;
        }
        return sources;
    }
};
exports.SourcesService = SourcesService;
exports.SourcesService = SourcesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(source_schema_1.Source.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SourcesService);
//# sourceMappingURL=sources.service.js.map