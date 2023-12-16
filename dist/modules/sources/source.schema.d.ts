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
import * as mongoose from 'mongoose';
import { Base } from 'src/@base/entity/base.entity';
export type SourceDocument = Source & mongoose.Document;
export declare class Source extends Base {
    url: string;
    description: string;
    htmlTitle: string;
    htmlInfo: string;
    sourceImage: string;
    userId: mongoose.Types.ObjectId;
}
export declare const SourceSchema: mongoose.Schema<Source, mongoose.Model<Source, any, any, any, mongoose.Document<unknown, any, Source> & Source & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Source, mongoose.Document<unknown, {}, mongoose.FlatRecord<Source>> & mongoose.FlatRecord<Source> & {
    _id: mongoose.Types.ObjectId;
}>;
