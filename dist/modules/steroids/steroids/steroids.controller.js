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
exports.SteroidsController = void 0;
const common_1 = require("@nestjs/common");
const steroids_service_1 = require("./steroids.service");
const swagger_1 = require("@nestjs/swagger");
const create_steroid_dto_1 = require("./dto/create-steroid.dto");
const steroid_dto_1 = require("./dto/steroid.dto");
const passport_1 = require("@nestjs/passport");
const user_dto_1 = require("../../users/dto/user.dto");
const auth_user_decorator_1 = require("../../../@common/decorators/auth-user.decorator");
let SteroidsController = class SteroidsController {
    constructor(steroidService) {
        this.steroidService = steroidService;
    }
    create(createSteroidDto, user) {
        createSteroidDto.userId = user._id;
        return this.steroidService.create(createSteroidDto);
    }
    find() {
        return this.steroidService.getDetailedSteroids();
    }
    findById(steroidId) {
        return this.steroidService.getDetailedSteroids(steroidId);
    }
    update(steroidId, updateSteroidDto) {
        return this.steroidService.update(steroidId, updateSteroidDto);
    }
    deleteById(steroidId) {
        return this.steroidService.delete(steroidId);
    }
};
exports.SteroidsController = SteroidsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create an steroid' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Steroid successfully created.',
        type: steroid_dto_1.SteroidDto,
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
    __metadata("design:paramtypes", [create_steroid_dto_1.CreateSteroidDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], SteroidsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Steroids' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Steroid list loaded.',
        type: [steroid_dto_1.SteroidDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SteroidsController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Steroid By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Steroid By Id Loaded.',
        type: steroid_dto_1.SteroidDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':steroidId'),
    __param(0, (0, common_1.Param)('steroidId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SteroidsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Steroid By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Steroid Updated.',
        type: steroid_dto_1.SteroidDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':steroidId'),
    __param(0, (0, common_1.Param)('steroidId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, steroid_dto_1.UpdateSteroidDto]),
    __metadata("design:returntype", Promise)
], SteroidsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Steroid By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Steroid Deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':steroidId'),
    __param(0, (0, common_1.Param)('steroidId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SteroidsController.prototype, "deleteById", null);
exports.SteroidsController = SteroidsController = __decorate([
    (0, swagger_1.ApiTags)('Steroids'),
    (0, common_1.Controller)('steroids'),
    __metadata("design:paramtypes", [steroids_service_1.SteroidsService])
], SteroidsController);
//# sourceMappingURL=steroids.controller.js.map