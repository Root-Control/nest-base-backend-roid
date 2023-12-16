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
exports.CreateCommentDto = void 0;
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
const create_rating_star_dto_1 = require("../../rating-stars/dto/create-rating-star.dto");
const comment_types_1 = require("../comment-types");
const class_transformer_1 = require("class-transformer");
class CreateCommentDto {
}
exports.CreateCommentDto = CreateCommentDto;
__decorate([
    (0, field_decorators_1.BooleanFieldOptional)(),
    __metadata("design:type", Boolean)
], CreateCommentDto.prototype, "isRated", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "comments", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "referenceId", void 0);
__decorate([
    (0, field_decorators_1.EnumField)(() => comment_types_1.CommentReferenceType, { swagger: true }),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "referenceType", void 0);
__decorate([
    (0, field_decorators_1.EnumField)(() => comment_types_1.CommentType, { swagger: true }),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "type", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => create_rating_star_dto_1.CreateRatingStarDto, { each: true, swagger: true }),
    (0, class_transformer_1.Transform)(({ obj, value }) => {
        value.forEach((val) => {
            val.referenceType = obj.referenceType;
            val.referenceId = obj.referenceId;
        });
        return value;
    }),
    __metadata("design:type", Array)
], CreateCommentDto.prototype, "ratingStars", void 0);
//# sourceMappingURL=create-comment.dto.js.map