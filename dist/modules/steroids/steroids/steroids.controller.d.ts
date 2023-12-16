import { SteroidsService } from './steroids.service';
import { CreateSteroidDto } from './dto/create-steroid.dto';
import { SteroidDetailDto, SteroidDto, UpdateSteroidDto } from './dto/steroid.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class SteroidsController {
    private readonly steroidService;
    constructor(steroidService: SteroidsService);
    create(createSteroidDto: CreateSteroidDto, user: UserDto): Promise<SteroidDto>;
    find(): Promise<SteroidDetailDto[]>;
    findById(steroidId: string): Promise<SteroidDetailDto>;
    update(steroidId: string, updateSteroidDto: UpdateSteroidDto): Promise<SteroidDto>;
    deleteById(steroidId: string): Promise<{
        success: boolean;
    }>;
}
