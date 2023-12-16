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
exports.CrudService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const mongodb_parser_1 = require("../../@common/utilities/mongodb-parser");
let CrudService = class CrudService {
    constructor(model, dtoClass) {
        this.model = model;
        this.dtoClass = dtoClass;
    }
    async create(createArticleDto) {
        try {
            const Repository = new this.model(createArticleDto);
            const result = await Repository.save();
            return (0, class_transformer_1.plainToClass)(this.dtoClass, result.toObject());
        }
        catch (ex) {
            throw new common_1.HttpException((0, mongodb_parser_1.getErrorMessage)(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async find(queryDto) {
        const { skip, limit, populate, ...props } = queryDto;
        const items = await this.model
            .find(props, null, {
            skip,
            limit,
            populate: populate || [],
        })
            .sort({ createdAt: -1 });
        return items.map((it) => (0, class_transformer_1.plainToClass)(this.dtoClass, it.toObject()));
    }
    async findById(_id) {
        try {
            const result = await this.model.findById(_id);
            if (!result) {
                throw new Error(`${this.model.modelName} not found`);
            }
            return (0, class_transformer_1.plainToClass)(this.dtoClass, result.toObject());
        }
        catch (ex) {
            throw new common_1.HttpException((0, mongodb_parser_1.getErrorMessage)(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async findOne(queryDto) {
        try {
            const article = await this.model.findOne(queryDto);
            if (!article) {
                throw new Error(`${this.model.modelName} not found`);
            }
            return (0, class_transformer_1.plainToClass)(this.dtoClass, article.toObject());
        }
        catch (ex) {
            throw new common_1.HttpException((0, mongodb_parser_1.getErrorMessage)(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async update(_id, payload) {
        try {
            const entity = await this.model.findOneAndUpdate({ _id }, payload, {
                new: true,
            });
            console.log('Payload here');
            console.log(payload);
            console.log('Entity here');
            console.log(entity);
            console.log(_id);
            if (!entity) {
                throw new Error(`${this.model.modelName} not found`);
            }
            return (0, class_transformer_1.plainToClass)(this.dtoClass, entity.toObject());
        }
        catch (ex) {
            throw new common_1.HttpException((0, mongodb_parser_1.getErrorMessage)(ex), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async delete(_id) {
        const model = await this.model.deleteOne({ _id });
        return {
            success: model.acknowledged,
        };
    }
};
exports.CrudService = CrudService;
exports.CrudService = CrudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, Function])
], CrudService);
//# sourceMappingURL=crud-generic.js.map