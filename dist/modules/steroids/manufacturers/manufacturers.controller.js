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
exports.ManufacturersController = void 0;
const common_1 = require("@nestjs/common");
const manufacturers_service_1 = require("./manufacturers.service");
const swagger_1 = require("@nestjs/swagger");
const create_manufacturer_dto_1 = require("./dto/create-manufacturer.dto");
const manufacturer_dto_1 = require("./dto/manufacturer.dto");
const passport_1 = require("@nestjs/passport");
const user_dto_1 = require("../../users/dto/user.dto");
const auth_user_decorator_1 = require("../../../@common/decorators/auth-user.decorator");
let ManufacturersController = class ManufacturersController {
    constructor(manufacturerService) {
        this.manufacturerService = manufacturerService;
    }
    create(createManufacturerDto, user) {
        createManufacturerDto.userId = user._id;
        return this.manufacturerService.create(createManufacturerDto);
    }
    find(manufacturerQueryDto) {
        return this.manufacturerService.find(manufacturerQueryDto);
    }
    findById(manufacturerId) {
        return this.manufacturerService.findById(manufacturerId);
    }
    update(manufacturerId, updateManufacturerDto) {
        return this.manufacturerService.update(manufacturerId, updateManufacturerDto);
    }
    deleteById(manufacturerId) {
        return this.manufacturerService.delete(manufacturerId);
    }
};
exports.ManufacturersController = ManufacturersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create an manufacturer' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Manufacturer successfully created.',
        type: manufacturer_dto_1.ManufacturerDto,
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
    __metadata("design:paramtypes", [create_manufacturer_dto_1.CreateManufacturerDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Manufacturers' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Manufacturer list loaded.',
        type: [manufacturer_dto_1.ManufacturerDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_dto_1.ManufacturerQueryDto]),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Manufacturer By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Manufacturer By Id Loaded.',
        type: manufacturer_dto_1.ManufacturerDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.Get)(':manufacturerId'),
    __param(0, (0, common_1.Param)('manufacturerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Manufacturer By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Manufacturer Updated.',
        type: manufacturer_dto_1.ManufacturerDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':manufacturerId'),
    __param(0, (0, common_1.Param)('manufacturerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, manufacturer_dto_1.UpdateManufacturerDto]),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Manufacturer By Id' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Manufacturer Deleted.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bad Request.',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':manufacturerId'),
    __param(0, (0, common_1.Param)('manufacturerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "deleteById", null);
exports.ManufacturersController = ManufacturersController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Manufacturers'),
    (0, common_1.Controller)('manufacturers'),
    __metadata("design:paramtypes", [manufacturers_service_1.ManufacturersService])
], ManufacturersController);
//# sourceMappingURL=manufacturers.controller.js.map