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
exports.CommentSchema = exports.Comment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const base_entity_1 = require("../../@base/entity/base.entity");
const user_schema_1 = require("../users/user.schema");
const comment_types_1 = require("./comment-types");
const ObjectId = mongoose.Schema.Types.ObjectId;
let Comment = class Comment extends base_entity_1.Base {
};
exports.Comment = Comment;
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], Comment.prototype, "isRated", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Comment.prototype, "comments", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: [comment_types_1.CommentType.COMMENT, comment_types_1.CommentType.REVIEW, comment_types_1.CommentType.POST],
    }),
    __metadata("design:type", String)
], Comment.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: [
            comment_types_1.CommentReferenceType.STEROID,
            comment_types_1.CommentReferenceType.SOURCE,
            comment_types_1.CommentReferenceType.POST,
        ],
    }),
    __metadata("design:type", String)
], Comment.prototype, "referenceType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, refPath: 'referenceType' }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Comment.prototype, "referenceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Comment.prototype, "userId", void 0);
exports.Comment = Comment = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true })
], Comment);
exports.CommentSchema = mongoose_1.SchemaFactory.createForClass(Comment);
exports.CommentSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=comment.schema.js.map