"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesModule = void 0;
const common_1 = require("@nestjs/common");
const vote_schema_1 = require("./vote.schema");
const votes_service_1 = require("./votes.service");
const votes_controller_1 = require("./votes.controller");
const mongoose_1 = require("@nestjs/mongoose");
let VotesModule = class VotesModule {
};
exports.VotesModule = VotesModule;
exports.VotesModule = VotesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: vote_schema_1.Vote.name, schema: vote_schema_1.VoteSchema }]),
        ],
        controllers: [votes_controller_1.VotesController],
        providers: [votes_service_1.VotesService],
    })
], VotesModule);
//# sourceMappingURL=votes.module.js.map