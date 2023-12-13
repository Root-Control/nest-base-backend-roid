import { Injectable, OnModuleInit } from '@nestjs/common';
import { CommonName, CommonNameDocument } from './common-name.schema';
import {
  CommonNameDto,
  CommonNameQueryDto,
  UpdateCommonNameDto,
} from './dto/common-name.dto';
import { CreateCommonNameDto } from './dto/create-common-name.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import commonNames from './base-common-names';

@Injectable()
export class CommonNamesService
  extends CrudService<
    CommonNameDto,
    CreateCommonNameDto,
    CommonNameQueryDto,
    UpdateCommonNameDto
  >
  implements OnModuleInit
{
  constructor(
    @InjectModel(CommonName.name)
    readonly commonNameModel: Model<CommonNameDocument>,
  ) {
    super(commonNameModel, CommonNameDto);
  }

  async onModuleInit() {
    const count = await this.commonNameModel.countDocuments();
    if (count === 0) {
      const commonNamesDtos = commonNames.map((name) => ({ name }));
      await this.commonNameModel.insertMany(commonNamesDtos);
    }
  }
}
