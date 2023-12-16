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
import { CommentDocument } from './comment.schema';
import { CommentDto, CommentQueryDto, UpdateCommentDto } from './dto/comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class CommentsService extends CrudService<CommentDto, CreateCommentDto, CommentQueryDto, UpdateCommentDto> {
    readonly commentModel: Model<CommentDocument>;
    private readonly eventEmitter;
    constructor(commentModel: Model<CommentDocument>, eventEmitter: EventEmitter2);
    createComment(createCommentDto: CreateCommentDto): Promise<CommentDto>;
}
