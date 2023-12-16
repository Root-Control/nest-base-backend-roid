import { CommonNamesService } from './common-names.service';
import { CreateCommonNameDto } from './dto/create-common-name.dto';
import { CommonNameDto, CommonNameQueryDto, UpdateCommonNameDto } from './dto/common-name.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class CommonNamesController {
    private readonly commonNameService;
    constructor(commonNameService: CommonNamesService);
    create(createCommonNameDto: CreateCommonNameDto, user: UserDto): Promise<CommonNameDto>;
    find(commonNameQueryDto: CommonNameQueryDto): Promise<CommonNameDto[]>;
    findById(commonNameId: string): Promise<CommonNameDto>;
    update(commonNameId: string, updateCommonNameDto: UpdateCommonNameDto): Promise<CommonNameDto>;
    deleteById(commonNameId: string): Promise<{
        success: boolean;
    }>;
}
