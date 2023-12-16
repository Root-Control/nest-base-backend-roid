import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto, PostQueryDto, UpdatePostDto } from './dto/post.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    create(createPostDto: CreatePostDto, user: UserDto): Promise<PostDto>;
    find(postQueryDto: PostQueryDto): Promise<PostDto[]>;
    findById(postId: string): Promise<PostDto>;
    update(postId: string, updatePostDto: UpdatePostDto): Promise<PostDto>;
    deleteById(postId: string): Promise<{
        success: boolean;
    }>;
}
