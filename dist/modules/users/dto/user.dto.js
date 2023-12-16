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
exports.UserQueryDto = exports.UpdateUserDto = exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
const user_types_1 = require("../types/user.types");
const class_transformer_1 = require("class-transformer");
class UserDto extends base_dto_1.BaseDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, field_decorators_1.EnumField)(() => user_types_1.RoleType),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    (0, field_decorators_1.EmailField)({ swagger: true }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, field_decorators_1.PhoneFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], UserDto.prototype, "avatar", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], UserDto.prototype, "aboutMe", void 0);
__decorate([
    (0, field_decorators_1.DateField)({ swagger: true }),
    __metadata("design:type", Date)
], UserDto.prototype, "birthDate", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], UserDto.prototype, "weight", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], UserDto.prototype, "height", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], UserDto.prototype, "bodyFat", void 0);
class UpdateUserDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(UserDto, ['createdAt', 'updatedAt', '_id'])) {
}
exports.UpdateUserDto = UpdateUserDto;
class UserQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(UserDto, ['createdAt', 'updatedAt'])) {
}
exports.UserQueryDto = UserQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], UserQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], UserQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=user.dto.js.map