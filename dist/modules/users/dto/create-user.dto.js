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
exports.CreateUserDto = void 0;
const user_types_1 = require("../types/user.types");
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true, maxLength: 16 }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, field_decorators_1.EmailField)({ swagger: true }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, field_decorators_1.PasswordField)({ swagger: true }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, field_decorators_1.PasswordField)({ swagger: true }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "aboutMe", void 0);
__decorate([
    (0, field_decorators_1.DateField)({ swagger: true }),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "birthDate", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "weight", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "height", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "bodyFat", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "avatar", void 0);
__decorate([
    (0, field_decorators_1.PhoneFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, field_decorators_1.EnumFieldOptional)(() => user_types_1.RoleType),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
//# sourceMappingURL=create-user.dto.js.map