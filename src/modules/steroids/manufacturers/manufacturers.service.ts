import { Injectable, OnModuleInit } from '@nestjs/common';
import { Manufacturer, ManufacturerDocument } from './manufacturer.schema';
import {
  ManufacturerDto,
  ManufacturerQueryDto,
  UpdateManufacturerDto,
} from './dto/manufacturer.dto';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import manufacturerNames from './base-manufacturer';

@Injectable()
export class ManufacturersService
  extends CrudService<
    ManufacturerDto,
    CreateManufacturerDto,
    ManufacturerQueryDto,
    UpdateManufacturerDto
  >
  implements OnModuleInit
{
  constructor(
    @InjectModel(Manufacturer.name)
    readonly manufacturerModel: Model<ManufacturerDocument>,
  ) {
    super(manufacturerModel, ManufacturerDto);
  }

  async onModuleInit() {
    const count = await this.manufacturerModel.countDocuments();
    if (count === 0) {
      const manufacturersDto = manufacturerNames.map((name) => ({ name }));
      await this.manufacturerModel.insertMany(manufacturersDto);
    }
  }
}
