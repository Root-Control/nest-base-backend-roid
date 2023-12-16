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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const swagger_1 = require("@nestjs/swagger");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const comment_dto_1 = require("./dto/comment.dto");
const passport_1 = require("@nestjs/passport");
const auth_user_decorator_1 = require("../../@common/decorators/auth-user.decorator");
const user_dto_1 = require("../users/dto/user.dto");
let CommentsController = class CommentsController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    create(createCommentDto, user) {
        createCommentDto.userId = user._id;
        return this.commentService.createComment(createCommentDto);
    }
    find(commentQueryDto) {
        commentQueryDto.populate = ['userId'];
        return this.commentService.find(commentQueryDto);
    }
    findById(commentId) {
        return this.commentService.findById(commentId);
    }
    update(commentId, updateCommentDto) {
        return this.commentService.update(commentId, updateCommentDto);
    }
    deleteById(commentId) {
        return this.commentService.delete(commentId);
    }
};
exports.CommentsController = CommentsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create an comment' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Comment successfully created.',
        type: comment_dto_1.CommentDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_user_decorator_1.AppUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Comments' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Comment list loaded.',
        type: [comment_dto_1.CommentDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.CommentQueryDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Comment By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Comment By Id Loaded.',
        type: comment_dto_1.CommentDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Comment By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Comment Updated.',
        type: comment_dto_1.CommentDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comment_dto_1.UpdateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Comment By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Comment Deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteById", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
//# sourceMappingURL=comments.controller.js.map