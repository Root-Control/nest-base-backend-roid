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
exports.CommentQueryDto = exports.UpdateCommentDto = exports.CommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
const create_rating_star_dto_1 = require("../../rating-stars/dto/create-rating-star.dto");
const comment_types_1 = require("../comment-types");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("../../users/dto/user.dto");
class CommentDto extends base_dto_1.BaseDto {
}
exports.CommentDto = CommentDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CommentDto.prototype, "comments", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CommentDto.prototype, "referenceId", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CommentDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, field_decorators_1.ClassField)(() => user_dto_1.UserDto, { swagger: true }),
    __metadata("design:type", user_dto_1.UserDto)
], CommentDto.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, field_decorators_1.ClassField)(() => user_dto_1.UserDto, { swagger: true }),
    (0, class_transformer_1.Transform)(({ obj }) => obj.userId, { toClassOnly: true }),
    __metadata("design:type", user_dto_1.UserDto)
], CommentDto.prototype, "user", void 0);
__decorate([
    (0, field_decorators_1.EnumField)(() => comment_types_1.CommentType, { swagger: true }),
    __metadata("design:type", String)
], CommentDto.prototype, "type", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => create_rating_star_dto_1.CreateRatingStarDto, { each: true }),
    __metadata("design:type", Array)
], CommentDto.prototype, "ratingStars", void 0);
class UpdateCommentDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(CommentDto, [
    'createdAt',
    'updatedAt',
    '_id',
    'ratingStars',
])) {
}
exports.UpdateCommentDto = UpdateCommentDto;
class CommentQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(CommentDto, ['createdAt', 'updatedAt', 'ratingStars'])) {
}
exports.CommentQueryDto = CommentQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], CommentQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], CommentQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=comment.dto.js.map