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
exports.ManufacturersService = void 0;
const common_1 = require("@nestjs/common");
const manufacturer_schema_1 = require("./manufacturer.schema");
const manufacturer_dto_1 = require("./dto/manufacturer.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crud_generic_1 = require("../../../@base/generics/crud-generic");
const base_manufacturer_1 = require("./base-manufacturer");
let ManufacturersService = class ManufacturersService extends crud_generic_1.CrudService {
    constructor(manufacturerModel) {
        super(manufacturerModel, manufacturer_dto_1.ManufacturerDto);
        this.manufacturerModel = manufacturerModel;
    }
    async onModuleInit() {
        const count = await this.manufacturerModel.countDocuments();
        if (count === 0) {
            const manufacturersDto = base_manufacturer_1.default.map((name) => ({ name }));
            await this.manufacturerModel.insertMany(manufacturersDto);
        }
    }
};
exports.ManufacturersService = ManufacturersService;
exports.ManufacturersService = ManufacturersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(manufacturer_schema_1.Manufacturer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ManufacturersService);
//# sourceMappingURL=manufacturers.service.js.map