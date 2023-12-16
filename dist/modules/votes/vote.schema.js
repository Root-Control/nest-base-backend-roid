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
exports.VoteSchema = exports.Vote = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const base_entity_1 = require("../../@base/entity/base.entity");
const user_schema_1 = require("../users/user.schema");
const steroid_schema_1 = require("../steroids/steroids/steroid.schema");
const source_schema_1 = require("../sources/source.schema");
const ObjectId = mongoose.Schema.Types.ObjectId;
let Vote = class Vote extends base_entity_1.Base {
};
exports.Vote = Vote;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: [steroid_schema_1.Steroid.name, source_schema_1.Source.name] }),
    __metadata("design:type", String)
], Vote.prototype, "referenceType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, refPath: 'referenceType' }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Vote.prototype, "referenceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], Vote.prototype, "upVoted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Vote.prototype, "userId", void 0);
exports.Vote = Vote = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true })
], Vote);
exports.VoteSchema = mongoose_1.SchemaFactory.createForClass(Vote);
exports.VoteSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=vote.schema.js.map