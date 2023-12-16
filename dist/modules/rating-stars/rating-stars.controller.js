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
exports.RatingStarsController = void 0;
const common_1 = require("@nestjs/common");
const rating_stars_service_1 = require("./rating-stars.service");
const swagger_1 = require("@nestjs/swagger");
const create_rating_star_dto_1 = require("./dto/create-rating-star.dto");
const rating_star_dto_1 = require("./dto/rating-star.dto");
const passport_1 = require("@nestjs/passport");
const auth_user_decorator_1 = require("../../@common/decorators/auth-user.decorator");
const user_dto_1 = require("../users/dto/user.dto");
let RatingStarsController = class RatingStarsController {
    constructor(ratingStarService) {
        this.ratingStarService = ratingStarService;
    }
    create(createRatingStarDto, user) {
        createRatingStarDto.userId = user._id;
        return this.ratingStarService.create(createRatingStarDto);
    }
    find(ratingStarQueryDto) {
        return this.ratingStarService.find(ratingStarQueryDto);
    }
    findById(ratingStarId) {
        return this.ratingStarService.findById(ratingStarId);
    }
    update(ratingStarId, updateRatingStarDto) {
        return this.ratingStarService.update(ratingStarId, updateRatingStarDto);
    }
    deleteById(ratingStarId) {
        return this.ratingStarService.delete(ratingStarId);
    }
};
exports.RatingStarsController = RatingStarsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a RatingStar' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'RatingStar successfully created.',
        type: rating_star_dto_1.RatingStarDto,
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
    __metadata("design:paramtypes", [create_rating_star_dto_1.CreateRatingStarDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], RatingStarsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List RatingStars' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'RatingStar list loaded.',
        type: [rating_star_dto_1.RatingStarDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rating_star_dto_1.RatingStarQueryDto]),
    __metadata("design:returntype", Promise)
], RatingStarsController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get RatingStar By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'RatingStar By Id Loaded.',
        type: rating_star_dto_1.RatingStarDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':ratingStarId'),
    __param(0, (0, common_1.Param)('ratingStarId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingStarsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get RatingStar By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'RatingStar Updated.',
        type: rating_star_dto_1.RatingStarDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':ratingStarId'),
    __param(0, (0, common_1.Param)('ratingStarId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, rating_star_dto_1.UpdateRatingStarDto]),
    __metadata("design:returntype", Promise)
], RatingStarsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete RatingStar By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'RatingStar Deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':ratingStarId'),
    __param(0, (0, common_1.Param)('ratingStarId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingStarsController.prototype, "deleteById", null);
exports.RatingStarsController = RatingStarsController = __decorate([
    (0, swagger_1.ApiTags)('RatingStars'),
    (0, common_1.Controller)('rating-stars'),
    __metadata("design:paramtypes", [rating_stars_service_1.RatingStarsService])
], RatingStarsController);
//# sourceMappingURL=rating-stars.controller.js.map