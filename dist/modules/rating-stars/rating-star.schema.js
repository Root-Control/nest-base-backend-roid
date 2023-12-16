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
exports.RatingStarSchema = exports.RatingStar = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const base_entity_1 = require("../../@base/entity/base.entity");
const user_schema_1 = require("../users/user.schema");
const category_schema_1 = require("../categories/category.schema");
const rating_star_types_1 = require("./rating-star-types");
const comment_schema_1 = require("../comments/comment.schema");
const ObjectId = mongoose.Schema.Types.ObjectId;
let RatingStar = class RatingStar extends base_entity_1.Base {
};
exports.RatingStar = RatingStar;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: false }),
    __metadata("design:type", Number)
], RatingStar.prototype, "points", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], RatingStar.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: [rating_star_types_1.RatingStarReferenceType.STEROID, rating_star_types_1.RatingStarReferenceType.SOURCE],
    }),
    __metadata("design:type", String)
], RatingStar.prototype, "referenceType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, refPath: 'referenceType' }),
    __metadata("design:type", mongoose.Types.ObjectId)
], RatingStar.prototype, "referenceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: ObjectId,
        ref: category_schema_1.Category.name,
        required: true,
    }),
    __metadata("design:type", String)
], RatingStar.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: comment_schema_1.Comment.name }),
    __metadata("design:type", String)
], RatingStar.prototype, "reviewId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose.Types.ObjectId)
], RatingStar.prototype, "userId", void 0);
exports.RatingStar = RatingStar = __decorate([
    (0, mongoose_1.Schema)({ autoCreate: true })
], RatingStar);
exports.RatingStarSchema = mongoose_1.SchemaFactory.createForClass(RatingStar);
exports.RatingStarSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=rating-star.schema.js.map