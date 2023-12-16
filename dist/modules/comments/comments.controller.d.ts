import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentDto, CommentQueryDto, UpdateCommentDto } from './dto/comment.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class CommentsController {
    private readonly commentService;
    constructor(commentService: CommentsService);
    create(createCommentDto: CreateCommentDto, user: UserDto): Promise<CommentDto>;
    find(commentQueryDto: CommentQueryDto): Promise<CommentDto[]>;
    findById(commentId: string): Promise<CommentDto>;
    update(commentId: string, updateCommentDto: UpdateCommentDto): Promise<CommentDto>;
    deleteById(commentId: string): Promise<{
        success: boolean;
    }>;
}
