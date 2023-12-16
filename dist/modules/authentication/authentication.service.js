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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const config_1 = require("@nestjs/config");
const app_constants_1 = require("../../app.constants");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("../users/dto/user.dto");
const utils_1 = require("../../@common/utilities/utils");
let AuthenticationService = class AuthenticationService {
    constructor(jwtService, configService, userService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.userService = userService;
    }
    async createAccessToken(data) {
        return {
            expiresIn: 60000,
            accessToken: await this.jwtService.signAsync({
                userId: data.userId,
                type: app_constants_1.TokenType.ACCESS_TOKEN,
                role: data.role,
            }),
        };
    }
    async validateUser(userLoginDto) {
        const user = await this.userService.userModel.findOne({
            email: userLoginDto.usernameOrEmail,
        });
        const isPasswordValid = await (0, utils_1.validateHash)(userLoginDto.password, user?.password);
        if (!isPasswordValid) {
            throw new common_1.NotFoundException({ error: 'Invalid Credentials' });
        }
        return (0, class_transformer_1.plainToClass)(user_dto_1.UserDto, user.toObject());
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        users_service_1.UsersService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map