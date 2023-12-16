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
exports.ManufacturerQueryDto = exports.UpdateManufacturerDto = exports.ManufacturerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("../../../../@base/dto/base.dto");
const field_decorators_1 = require("../../../../@common/decorators/field.decorators");
class ManufacturerDto extends base_dto_1.BaseDto {
}
exports.ManufacturerDto = ManufacturerDto;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], ManufacturerDto.prototype, "name", void 0);
class UpdateManufacturerDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(ManufacturerDto, ['createdAt', 'updatedAt', '_id'])) {
}
exports.UpdateManufacturerDto = UpdateManufacturerDto;
class ManufacturerQueryDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(ManufacturerDto, ['createdAt', 'updatedAt'])) {
}
exports.ManufacturerQueryDto = ManufacturerQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], ManufacturerQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, field_decorators_1.NumberFieldOptional)(),
    __metadata("design:type", Number)
], ManufacturerQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=manufacturer.dto.js.map