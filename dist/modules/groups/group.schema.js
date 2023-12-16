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
exports.GroupSchema = exports.Group = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const base_entity_1 = require("../../@base/entity/base.entity");
const user_schema_1 = require("../users/user.schema");
const group_types_1 = require("./group-types");
const ObjectId = mongoose.Schema.Types.ObjectId;
let Group = class Group extends base_entity_1.Base {
};
exports.Group = Group;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Group.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: [group_types_1.GroupType.PRIVATE, group_types_1.GroupType.PUBLIC],
    }),
    __metadata("design:type", String)
], Group.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Group.prototype, "userId", void 0);
exports.Group = Group = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true })
], Group);
exports.GroupSchema = mongoose_1.SchemaFactory.createForClass(Group);
exports.GroupSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=group.schema.js.map