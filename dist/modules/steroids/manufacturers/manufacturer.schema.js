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
exports.ManufacturerSchema = exports.Manufacturer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const base_entity_1 = require("../../../@base/entity/base.entity");
const ObjectId = mongoose.Schema.Types.ObjectId;
let Manufacturer = class Manufacturer extends base_entity_1.Base {
};
exports.Manufacturer = Manufacturer;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Manufacturer.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: 'User' }),
    __metadata("design:type", Object)
], Manufacturer.prototype, "userId", void 0);
exports.Manufacturer = Manufacturer = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true })
], Manufacturer);
exports.ManufacturerSchema = mongoose_1.SchemaFactory.createForClass(Manufacturer);
exports.ManufacturerSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=manufacturer.schema.js.map