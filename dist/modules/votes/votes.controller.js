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
exports.VotesController = void 0;
const common_1 = require("@nestjs/common");
const votes_service_1 = require("./votes.service");
const swagger_1 = require("@nestjs/swagger");
const create_vote_dto_1 = require("./dto/create-vote.dto");
const vote_dto_1 = require("./dto/vote.dto");
const passport_1 = require("@nestjs/passport");
const auth_user_decorator_1 = require("../../@common/decorators/auth-user.decorator");
const user_dto_1 = require("../users/dto/user.dto");
let VotesController = class VotesController {
    constructor(voteService) {
        this.voteService = voteService;
    }
    create(createVoteDto, user) {
        createVoteDto.userId = user._id;
        return this.voteService.create(createVoteDto);
    }
    find(voteQueryDto) {
        return this.voteService.find(voteQueryDto);
    }
    findById(voteId) {
        return this.voteService.findById(voteId);
    }
    update(voteId, updateVoteDto) {
        return this.voteService.update(voteId, updateVoteDto);
    }
    deleteById(voteId) {
        return this.voteService.delete(voteId);
    }
};
exports.VotesController = VotesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create an vote' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Vote successfully created.',
        type: vote_dto_1.VoteDto,
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
    __metadata("design:paramtypes", [create_vote_dto_1.CreateVoteDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Votes' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Vote list loaded.',
        type: [vote_dto_1.VoteDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vote_dto_1.VoteQueryDto]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Vote By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Vote By Id Loaded.',
        type: vote_dto_1.VoteDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':voteId'),
    __param(0, (0, common_1.Param)('voteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Vote By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Vote Updated.',
        type: vote_dto_1.VoteDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Put)(':voteId'),
    __param(0, (0, common_1.Param)('voteId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, vote_dto_1.UpdateVoteDto]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Vote By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Vote Deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Delete)(':voteId'),
    __param(0, (0, common_1.Param)('voteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "deleteById", null);
exports.VotesController = VotesController = __decorate([
    (0, swagger_1.ApiTags)('Votes'),
    (0, common_1.Controller)('votes'),
    __metadata("design:paramtypes", [votes_service_1.VotesService])
], VotesController);
//# sourceMappingURL=votes.controller.js.map