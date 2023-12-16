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
exports.CommonNamesService = void 0;
const common_1 = require("@nestjs/common");
const common_name_schema_1 = require("./common-name.schema");
const common_name_dto_1 = require("./dto/common-name.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crud_generic_1 = require("../../../@base/generics/crud-generic");
const base_common_names_1 = require("./base-common-names");
let CommonNamesService = class CommonNamesService extends crud_generic_1.CrudService {
    constructor(commonNameModel) {
        super(commonNameModel, common_name_dto_1.CommonNameDto);
        this.commonNameModel = commonNameModel;
    }
    async onModuleInit() {
        const count = await this.commonNameModel.countDocuments();
        if (count === 0) {
            const commonNamesDtos = base_common_names_1.default.map((name) => ({ name }));
            await this.commonNameModel.insertMany(commonNamesDtos);
        }
    }
};
exports.CommonNamesService = CommonNamesService;
exports.CommonNamesService = CommonNamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_name_schema_1.CommonName.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommonNamesService);
//# sourceMappingURL=common-names.service.js.map