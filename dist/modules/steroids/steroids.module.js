"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._SteroidsModule = void 0;
const common_1 = require("@nestjs/common");
const steroids_module_1 = require("./steroids/steroids.module");
const common_names_module_1 = require("./common-names/common-names.module");
const manufacturers_1 = require("./manufacturers");
let _SteroidsModule = class _SteroidsModule {
};
exports._SteroidsModule = _SteroidsModule;
exports._SteroidsModule = _SteroidsModule = __decorate([
    (0, common_1.Module)({
        imports: [steroids_module_1.SteroidsModule, common_names_module_1.CommonNamesModule, manufacturers_1.ManufacturersModule],
        exports: [steroids_module_1.SteroidsModule, common_names_module_1.CommonNamesModule, manufacturers_1.ManufacturersModule],
    })
], _SteroidsModule);
//# sourceMappingURL=steroids.module.js.map