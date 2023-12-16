/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { OnModuleInit } from '@nestjs/common';
import { ManufacturerDocument } from './manufacturer.schema';
import { ManufacturerDto, ManufacturerQueryDto, UpdateManufacturerDto } from './dto/manufacturer.dto';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
export declare class ManufacturersService extends CrudService<ManufacturerDto, CreateManufacturerDto, ManufacturerQueryDto, UpdateManufacturerDto> implements OnModuleInit {
    readonly manufacturerModel: Model<ManufacturerDocument>;
    constructor(manufacturerModel: Model<ManufacturerDocument>);
    onModuleInit(): Promise<void>;
}
