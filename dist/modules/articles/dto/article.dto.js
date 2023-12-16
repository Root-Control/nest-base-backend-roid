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
exports.ArticleQueryDto = exports.UpdateArticleDto = exports.ArticleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
class ArticleDto extends base_dto_1.BaseDto {
}
exports.ArticleDto = ArticleDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], ArticleDto.prototype, "title", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], ArticleDto.prototype, "content", void 0);
class UpdateArticleDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(ArticleDto, ['createdAt', 'updatedAt', '_id'])) {
}
exports.UpdateArticleDto = UpdateArticleDto;
class ArticleQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(ArticleDto, ['createdAt', 'updatedAt'])) {
}
exports.ArticleQueryDto = ArticleQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], ArticleQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], ArticleQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=article.dto.js.map