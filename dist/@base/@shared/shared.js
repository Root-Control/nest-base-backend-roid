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
exports.Points = void 0;
const field_decorators_1 = require("../../@common/decorators/field.decorators");
class Points {
}
exports.Points = Points;
__decorate([
    (0, field_decorators_1.StringField)({ swagger: true }),
    __metadata("design:type", String)
], Points.prototype, "category", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], Points.prototype, "average", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], Points.prototype, "roundedAverage", void 0);
__decorate([
    (0, field_decorators_1.NumberField)({ swagger: true }),
    __metadata("design:type", Number)
], Points.prototype, "reviews", void 0);
//# sourceMappingURL=shared.js.map