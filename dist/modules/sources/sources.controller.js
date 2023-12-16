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
exports.SourcesController = void 0;
const common_1 = require("@nestjs/common");
const sources_service_1 = require("./sources.service");
const swagger_1 = require("@nestjs/swagger");
const create_source_dto_1 = require("./dto/create-source.dto");
const source_dto_1 = require("./dto/source.dto");
const passport_1 = require("@nestjs/passport");
const auth_user_decorator_1 = require("../../@common/decorators/auth-user.decorator");
const user_dto_1 = require("../users/dto/user.dto");
let SourcesController = class SourcesController {
    constructor(sourceService) {
        this.sourceService = sourceService;
    }
    create(createSourceDto, user) {
        createSourceDto.userId = user._id;
        return this.sourceService.create(createSourceDto);
    }
    find() {
        return this.sourceService.getDetailedSources();
    }
    findById(sourceId) {
        return this.sourceService.getDetailedSources(sourceId);
    }
    update(sourceId, updateSourceDto) {
        return this.sourceService.update(sourceId, updateSourceDto);
    }
    deleteById(sourceId) {
        return this.sourceService.delete(sourceId);
    }
};
exports.SourcesController = SourcesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create an source' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Source successfully created.',
        type: source_dto_1.SourceDto,
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
    __metadata("design:paramtypes", [create_source_dto_1.CreateSourceDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], SourcesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Sources' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Source list loaded.',
        type: [source_dto_1.SourceDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SourcesController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Source By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Source By Id Loaded.',
        type: source_dto_1.SourceDetailDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':sourceId'),
    __param(0, (0, common_1.Param)('sourceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SourcesController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Source By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Source Updated.',
        type: source_dto_1.SourceDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':sourceId'),
    __param(0, (0, common_1.Param)('sourceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, source_dto_1.UpdateSourceDto]),
    __metadata("design:returntype", Promise)
], SourcesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Source By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Source Deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':sourceId'),
    __param(0, (0, common_1.Param)('sourceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SourcesController.prototype, "deleteById", null);
exports.SourcesController = SourcesController = __decorate([
    (0, swagger_1.ApiTags)('Sources'),
    (0, common_1.Controller)('sources'),
    __metadata("design:paramtypes", [sources_service_1.SourcesService])
], SourcesController);
//# sourceMappingURL=sources.controller.js.map