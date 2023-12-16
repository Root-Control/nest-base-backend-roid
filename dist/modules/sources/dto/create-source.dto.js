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
exports.CreateSourceDto = void 0;
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
class CreateSourceDto {
}
exports.CreateSourceDto = CreateSourceDto;
__decorate([
    (0, field_decorators_1.StringField)({ minLength: 1, maxLength: 100, swagger: true }),
    __metadata("design:type", String)
], CreateSourceDto.prototype, "url", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ minLength: 1, swagger: true }),
    __metadata("design:type", String)
], CreateSourceDto.prototype, "htmlTitle", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ minLength: 1, swagger: true }),
    __metadata("design:type", String)
], CreateSourceDto.prototype, "htmlInfo", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ minLength: 1, swagger: true }),
    __metadata("design:type", String)
], CreateSourceDto.prototype, "description", void 0);
//# sourceMappingURL=create-source.dto.js.map