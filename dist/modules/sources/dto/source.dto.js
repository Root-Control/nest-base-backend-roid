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
exports.SourceQueryDto = exports.UpdateSourceDto = exports.SourceDetailDto = exports.SourceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const shared_1 = require("../../../@base/@shared/shared");
const base_dto_1 = require("../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
const utils_1 = require("../../../@common/utilities/utils");
const comment_dto_1 = require("../../comments/dto/comment.dto");
const user_dto_1 = require("../../users/dto/user.dto");
class SourceDto extends base_dto_1.BaseDto {
}
exports.SourceDto = SourceDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SourceDto.prototype, "url", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], SourceDto.prototype, "description", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], SourceDto.prototype, "htmlTitle", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], SourceDto.prototype, "htmlInfo", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], SourceDto.prototype, "sourceImage", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SourceDto.prototype, "userId", void 0);
class SourceDetailDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(SourceDto, ['userId'])) {
}
exports.SourceDetailDto = SourceDetailDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SourceDetailDto.prototype, "url", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SourceDetailDto.prototype, "description", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SourceDetailDto.prototype, "htmlTitle", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SourceDetailDto.prototype, "htmlInfo", void 0);
__decorate([
    (0, field_decorators_1.ClassField)(() => user_dto_1.UserDto, { swagger: true }),
    __metadata("design:type", user_dto_1.UserDto)
], SourceDetailDto.prototype, "user", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], SourceDetailDto.prototype, "commentCount", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => comment_dto_1.CommentDto, { swagger: true }),
    __metadata("design:type", comment_dto_1.CommentDto)
], SourceDetailDto.prototype, "lastComment", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => user_dto_1.UserDto, { swagger: true }),
    __metadata("design:type", user_dto_1.UserDto)
], SourceDetailDto.prototype, "lastCommentUser", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], SourceDetailDto.prototype, "reviewCount", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => comment_dto_1.CommentDto, { swagger: true }),
    __metadata("design:type", comment_dto_1.CommentDto)
], SourceDetailDto.prototype, "lastReview", void 0);
__decorate([
    (0, field_decorators_1.ClassField)(() => shared_1.Points, { swagger: true }),
    __metadata("design:type", Array)
], SourceDetailDto.prototype, "points", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ obj }) => {
        const points = obj.points.map((point) => point.average);
        return (0, utils_1.calculateScore)(points);
    }),
    __metadata("design:type", Number)
], SourceDetailDto.prototype, "score", void 0);
class UpdateSourceDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(SourceDto, ['createdAt', 'updatedAt', '_id'])) {
}
exports.UpdateSourceDto = UpdateSourceDto;
class SourceQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(SourceDto, ['createdAt', 'updatedAt'])) {
}
exports.SourceQueryDto = SourceQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], SourceQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], SourceQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=source.dto.js.map