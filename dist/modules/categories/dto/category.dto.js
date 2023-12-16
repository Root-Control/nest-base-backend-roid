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
exports.CategoryQueryDto = exports.UpdateCategoryDto = exports.CategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
const category_types_1 = require("../category.types");
class CategoryDto extends base_dto_1.BaseDto {
}
exports.CategoryDto = CategoryDto;
__decorate([
    (0, field_decorators_1.EnumField)(() => category_types_1.CategoryType),
    __metadata("design:type", String)
], CategoryDto.prototype, "type", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CategoryDto.prototype, "shortName", void 0);
class UpdateCategoryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(CategoryDto, ['createdAt', 'updatedAt', '_id'])) {
}
exports.UpdateCategoryDto = UpdateCategoryDto;
class CategoryQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(CategoryDto, ['createdAt', 'updatedAt'])) {
}
exports.CategoryQueryDto = CategoryQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], CategoryQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], CategoryQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=category.dto.js.map