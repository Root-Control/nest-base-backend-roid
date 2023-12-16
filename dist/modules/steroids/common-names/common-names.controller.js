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
exports.CommonNamesController = void 0;
const common_1 = require("@nestjs/common");
const common_names_service_1 = require("./common-names.service");
const swagger_1 = require("@nestjs/swagger");
const create_common_name_dto_1 = require("./dto/create-common-name.dto");
const common_name_dto_1 = require("./dto/common-name.dto");
const passport_1 = require("@nestjs/passport");
const user_dto_1 = require("../../users/dto/user.dto");
const auth_user_decorator_1 = require("../../../@common/decorators/auth-user.decorator");
let CommonNamesController = class CommonNamesController {
    constructor(commonNameService) {
        this.commonNameService = commonNameService;
    }
    create(createCommonNameDto, user) {
        createCommonNameDto.userId = user._id;
        return this.commonNameService.create(createCommonNameDto);
    }
    find(commonNameQueryDto) {
        return this.commonNameService.find(commonNameQueryDto);
    }
    findById(commonNameId) {
        return this.commonNameService.findById(commonNameId);
    }
    update(commonNameId, updateCommonNameDto) {
        return this.commonNameService.update(commonNameId, updateCommonNameDto);
    }
    deleteById(commonNameId) {
        return this.commonNameService.delete(commonNameId);
    }
};
exports.CommonNamesController = CommonNamesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create an commonName' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'CommonName successfully created.',
        type: common_name_dto_1.CommonNameDto,
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
    __metadata("design:paramtypes", [create_common_name_dto_1.CreateCommonNameDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], CommonNamesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List CommonNames' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'CommonName list loaded.',
        type: [common_name_dto_1.CommonNameDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_name_dto_1.CommonNameQueryDto]),
    __metadata("design:returntype", Promise)
], CommonNamesController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get CommonName By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'CommonName By Id Loaded.',
        type: common_name_dto_1.CommonNameDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':commonNameId'),
    __param(0, (0, common_1.Param)('commonNameId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommonNamesController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get CommonName By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'CommonName Updated.',
        type: common_name_dto_1.CommonNameDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':commonNameId'),
    __param(0, (0, common_1.Param)('commonNameId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, common_name_dto_1.UpdateCommonNameDto]),
    __metadata("design:returntype", Promise)
], CommonNamesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete CommonName By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'CommonName Deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':commonNameId'),
    __param(0, (0, common_1.Param)('commonNameId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommonNamesController.prototype, "deleteById", null);
exports.CommonNamesController = CommonNamesController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Common Names'),
    (0, common_1.Controller)('common-names'),
    __metadata("design:paramtypes", [common_names_service_1.CommonNamesService])
], CommonNamesController);
//# sourceMappingURL=common-names.controller.js.map