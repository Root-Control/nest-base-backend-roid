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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comment_schema_1 = require("./comment.schema");
const comment_dto_1 = require("./dto/comment.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crud_generic_1 = require("../../@base/generics/crud-generic");
const event_emitter_1 = require("@nestjs/event-emitter");
const comment_types_1 = require("./comment-types");
let CommentsService = class CommentsService extends crud_generic_1.CrudService {
    constructor(commentModel, eventEmitter) {
        super(commentModel, comment_dto_1.CommentDto);
        this.commentModel = commentModel;
        this.eventEmitter = eventEmitter;
    }
    async createComment(createCommentDto) {
        const { ratingStars, ...commentDto } = createCommentDto;
        commentDto.isRated = ratingStars && ratingStars.length > 0 ? true : false;
        const comment = await this.create(commentDto);
        if (commentDto.isRated) {
            ratingStars.forEach((rating) => {
                rating.reviewId = comment._id;
            });
            this.eventEmitter.emit(comment_types_1.CommentEvent.REVIEW_CREATE, ratingStars);
        }
        return comment;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        event_emitter_1.EventEmitter2])
], CommentsService);
//# sourceMappingURL=comments.service.js.map