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
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const base_entity_1 = require("../../../@base/entity/base.entity");
const user_schema_1 = require("../../users/user.schema");
const topic_schema_1 = require("../topics/topic.schema");
const ObjectId = mongoose.Schema.Types.ObjectId;
let Post = class Post extends base_entity_1.Base {
};
exports.Post = Post;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: topic_schema_1.Topic.name }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Post.prototype, "topicId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Post.prototype, "userId", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true })
], Post);
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
exports.PostSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=post.schema.js.map