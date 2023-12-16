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
export type VoteDocument = Vote & mongoose.Document;
export declare class Vote extends Base {
    referenceType: string;
    referenceId: mongoose.Types.ObjectId;
    upVoted: boolean;
    userId: mongoose.Types.ObjectId;
}
export declare const VoteSchema: mongoose.Schema<Vote, mongoose.Model<Vote, any, any, any, mongoose.Document<unknown, any, Vote> & Vote & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Vote, mongoose.Document<unknown, {}, mongoose.FlatRecord<Vote>> & mongoose.FlatRecord<Vote> & {
    _id: mongoose.Types.ObjectId;
}>;
