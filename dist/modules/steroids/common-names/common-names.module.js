"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonNamesModule = void 0;
const common_1 = require("@nestjs/common");
const common_name_schema_1 = require("./common-name.schema");
const common_names_service_1 = require("./common-names.service");
const common_names_controller_1 = require("./common-names.controller");
const mongoose_1 = require("@nestjs/mongoose");
let CommonNamesModule = class CommonNamesModule {
};
exports.CommonNamesModule = CommonNamesModule;
exports.CommonNamesModule = CommonNamesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: common_name_schema_1.CommonName.name, schema: common_name_schema_1.CommonNameSchema },
            ]),
        ],
        controllers: [common_names_controller_1.CommonNamesController],
        providers: [common_names_service_1.CommonNamesService],
    })
], CommonNamesModule);
//# sourceMappingURL=common-names.module.js.map