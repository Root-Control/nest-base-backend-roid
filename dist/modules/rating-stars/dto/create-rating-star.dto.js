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
exports.CreateRatingStarDto = void 0;
const field_decorators_1 = require("../../../@common/decorators/field.decorators");
const rating_star_types_1 = require("../rating-star-types");
class CreateRatingStarDto {
}
exports.CreateRatingStarDto = CreateRatingStarDto;
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], CreateRatingStarDto.prototype, "points", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", Number)
], CreateRatingStarDto.prototype, "content", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], CreateRatingStarDto.prototype, "referenceId", void 0);
__decorate([
    (0, field_decorators_1.EnumFieldOptional)(() => rating_star_types_1.RatingStarReferenceType, { swagger: true }),
    __metadata("design:type", String)
], CreateRatingStarDto.prototype, "referenceType", void 0);
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], CreateRatingStarDto.prototype, "categoryId", void 0);
__decorate([
    (0, field_decorators_1.StringFieldOptional)({ swagger: true }),
    __metadata("design:type", String)
], CreateRatingStarDto.prototype, "reviewId", void 0);
//# sourceMappingURL=create-rating-star.dto.js.map