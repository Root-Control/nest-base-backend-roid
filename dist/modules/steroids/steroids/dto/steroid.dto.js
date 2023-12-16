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
exports.SteroidQueryDto = exports.UpdateSteroidDto = exports.SteroidDetailDto = exports.SteroidDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("../../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../../@common/decorators/field.decorators");
const common_name_dto_1 = require("../../common-names/dto/common-name.dto");
const manufacturer_dto_1 = require("../../manufacturers/dto/manufacturer.dto");
const shared_1 = require("../../../../@base/@shared/shared");
const user_dto_1 = require("../../../users/dto/user.dto");
const comment_dto_1 = require("../../../comments/dto/comment.dto");
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../../../../@common/utilities/utils");
class SteroidDto extends base_dto_1.BaseDto {
}
exports.SteroidDto = SteroidDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SteroidDto.prototype, "name", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SteroidDto.prototype, "commonNameId", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SteroidDto.prototype, "manufacturerId", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SteroidDto.prototype, "userId", void 0);
class SteroidDetailDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(SteroidDto, ['commonNameId', 'manufacturerId', 'userId'])) {
}
exports.SteroidDetailDto = SteroidDetailDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], SteroidDetailDto.prototype, "name", void 0);
__decorate([
    (0, field_decorators_1.ClassField)(() => common_name_dto_1.CommonNameDto, { swagger: true }),
    __metadata("design:type", common_name_dto_1.CommonNameDto)
], SteroidDetailDto.prototype, "commonName", void 0);
__decorate([
    (0, field_decorators_1.ClassField)(() => manufacturer_dto_1.ManufacturerDto, { swagger: true }),
    __metadata("design:type", manufacturer_dto_1.ManufacturerDto)
], SteroidDetailDto.prototype, "manufacturer", void 0);
__decorate([
    (0, field_decorators_1.ClassField)(() => shared_1.Points, { swagger: true }),
    __metadata("design:type", Array)
], SteroidDetailDto.prototype, "points", void 0);
__decorate([
    (0, field_decorators_1.ClassField)(() => user_dto_1.UserDto, { swagger: true }),
    __metadata("design:type", user_dto_1.UserDto)
], SteroidDetailDto.prototype, "user", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], SteroidDetailDto.prototype, "commentCount", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => comment_dto_1.CommentDto, { swagger: true }),
    __metadata("design:type", comment_dto_1.CommentDto)
], SteroidDetailDto.prototype, "lastComment", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => user_dto_1.UserDto, { swagger: true }),
    __metadata("design:type", user_dto_1.UserDto)
], SteroidDetailDto.prototype, "lastCommentUser", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], SteroidDetailDto.prototype, "reviewCount", void 0);
__decorate([
    (0, field_decorators_1.ClassFieldOptional)(() => comment_dto_1.CommentDto, { swagger: true }),
    __metadata("design:type", comment_dto_1.CommentDto)
], SteroidDetailDto.prototype, "lastReview", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ obj }) => {
        const points = obj.points.map((point) => point.average);
        return (0, utils_1.calculateScore)(points);
    }),
    __metadata("design:type", Number)
], SteroidDetailDto.prototype, "score", void 0);
class UpdateSteroidDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(SteroidDto, ['createdAt', 'updatedAt', '_id'])) {
}
exports.UpdateSteroidDto = UpdateSteroidDto;
class SteroidQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(SteroidDto, ['createdAt', 'updatedAt'])) {
}
exports.SteroidQueryDto = SteroidQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], SteroidQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], SteroidQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=steroid.dto.js.map