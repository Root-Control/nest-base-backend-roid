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
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CommentEvent } from './comment-types';

@Injectable()
export class CommentsService extends CrudService<
  CommentDto,
  CreateCommentDto,
  CommentQueryDto,
  UpdateCommentDto
> {
  constructor(
    @InjectModel(Comment.name) readonly commentModel: Model<CommentDocument>,
    private readonly eventEmitter: EventEmitter2,
  ) {
    super(commentModel, CommentDto);
  }

  async createComment(createCommentDto: CreateCommentDto): Promise<CommentDto> {
    const { ratingStars, ...commentDto } = createCommentDto;

    commentDto.isRated = ratingStars && ratingStars.length > 0 ? true : false;
    const comment = await this.create(commentDto);

    if (commentDto.isRated) {
      ratingStars.forEach((rating) => {
        rating.reviewId = comment._id;
      });
      this.eventEmitter.emit(CommentEvent.REVIEW_CREATE, ratingStars);
    }
    return comment;
  }
}
