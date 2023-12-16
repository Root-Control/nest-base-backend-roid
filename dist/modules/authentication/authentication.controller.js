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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const login_payload_dto_1 = require("./dto/login-payload.dto");
const user_login_dto_1 = require("./dto/user-login.dto");
const users_service_1 = require("../users/users.service");
const authentication_service_1 = require("./authentication.service");
const user_dto_1 = require("../users/dto/user.dto");
const create_user_dto_1 = require("../users/dto/create-user.dto");
let AuthController = class AuthController {
    constructor(userService, authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
    }
    async userLogin(userLoginDto) {
        const user = await this.authenticationService.validateUser(userLoginDto);
        const token = await this.authenticationService.createAccessToken({
            userId: user._id,
            role: user.role,
        });
        return new login_payload_dto_1.LoginPayloadDto(user, token);
    }
    async userRegister(createUserDto) {
        const user = await this.userService.create(createUserDto);
        const token = await this.authenticationService.createAccessToken({
            userId: user._id,
            role: user.role,
        });
        return new login_payload_dto_1.LoginPayloadDto(user, token);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        type: login_payload_dto_1.LoginPayloadDto,
        description: 'User info with access token',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userLogin", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({ type: user_dto_1.UserDto, description: 'Successfully Registered' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userRegister", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Authentication'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        authentication_service_1.AuthenticationService])
], AuthController);
//# sourceMappingURL=authentication.controller.js.map