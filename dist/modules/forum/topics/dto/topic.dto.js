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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicQueryDto = exports.UpdateTopicDto = exports.TopicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("../../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../../@common/decorators/field.decorators");
class TopicDto extends base_dto_1.BaseDto {
}
exports.TopicDto = TopicDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], TopicDto.prototype, "name", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], TopicDto.prototype, "description", void 0);
class UpdateTopicDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(TopicDto, ['createdAt', 'updatedAt', '_id'])) {
}
exports.UpdateTopicDto = UpdateTopicDto;
class TopicQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(TopicDto, ['createdAt', 'updatedAt'])) {
}
exports.TopicQueryDto = TopicQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], TopicQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], TopicQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=topic.dto.js.map