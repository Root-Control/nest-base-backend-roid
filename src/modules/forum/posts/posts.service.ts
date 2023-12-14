import { Injectable } from '@nestjs/common';
import { Post, PostDocument } from './post.schema';
import {
  PostDto,
  PostQueryDto,
  UpdatePostDto,
} from './dto/post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';

@Injectable()
export class PostsService extends CrudService<
  PostDto,
  CreatePostDto,
  PostQueryDto,
  UpdatePostDto
> {
  constructor(
    @InjectModel(Post.name) readonly postModel: Model<PostDocument>,
  ) {
    super(postModel, PostDto);
  }
}
