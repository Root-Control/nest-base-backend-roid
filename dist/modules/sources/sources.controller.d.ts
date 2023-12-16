import { SourcesService } from './sources.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { SourceDetailDto, SourceDto, UpdateSourceDto } from './dto/source.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class SourcesController {
    private readonly sourceService;
    constructor(sourceService: SourcesService);
    create(createSourceDto: CreateSourceDto, user: UserDto): Promise<SourceDto>;
    find(): Promise<SourceDetailDto[]>;
    findById(sourceId: string): Promise<SourceDetailDto>;
    update(sourceId: string, updateSourceDto: UpdateSourceDto): Promise<SourceDto>;
    deleteById(sourceId: string): Promise<{
        success: boolean;
    }>;
}
