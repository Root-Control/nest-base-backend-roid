import { Injectable } from '@nestjs/common';
import { Comment, CommentDocument } from './comment.schema';
import {
  CommentDto,
  CommentQueryDto,
  UpdateCommentDto,
} from './dto/comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';

@Injectable()
export class CommentsService extends CrudService<
  CommentDto,
  CreateCommentDto,
  CommentQueryDto,
  UpdateCommentDto
> {
  constructor(
    @InjectModel(Comment.name) readonly commentModel: Model<CommentDocument>,
  ) {
    super(commentModel, CommentDto);
  }
}
