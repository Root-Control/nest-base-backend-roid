import { ManufacturersService } from './manufacturers.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { ManufacturerDto, ManufacturerQueryDto, UpdateManufacturerDto } from './dto/manufacturer.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class ManufacturersController {
    private readonly manufacturerService;
    constructor(manufacturerService: ManufacturersService);
    create(createManufacturerDto: CreateManufacturerDto, user: UserDto): Promise<ManufacturerDto>;
    find(manufacturerQueryDto: ManufacturerQueryDto): Promise<ManufacturerDto[]>;
    findById(manufacturerId: string): Promise<ManufacturerDto>;
    update(manufacturerId: string, updateManufacturerDto: UpdateManufacturerDto): Promise<ManufacturerDto>;
    deleteById(manufacturerId: string): Promise<{
        success: boolean;
    }>;
}
