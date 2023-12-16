import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleDto, ArticleQueryDto, UpdateArticleDto } from './dto/article.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class ArticlesController {
    private readonly articleService;
    constructor(articleService: ArticlesService);
    create(createArticleDto: CreateArticleDto, user: UserDto): Promise<ArticleDto>;
    find(articleQueryDto: ArticleQueryDto): Promise<ArticleDto[]>;
    findById(articleId: string): Promise<ArticleDto>;
    update(articleId: string, updateArticleDto: UpdateArticleDto): Promise<ArticleDto>;
    deleteById(articleId: string): Promise<{
        success: boolean;
    }>;
}
