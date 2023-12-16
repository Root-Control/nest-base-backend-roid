import { Injectable } from '@nestjs/common';
import { Steroid, SteroidDocument } from './steroid.schema';
import {
  SteroidDetailDto,
  SteroidDto,
  SteroidQueryDto,
  UpdateSteroidDto,
} from './dto/steroid.dto';
import { CreateSteroidDto } from './dto/create-steroid.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { plainToClass } from 'class-transformer';
import { steroidReviewsAggregation } from './aggregations/steroids.aggregations';

@Injectable()
export class SteroidsService extends CrudService<
  SteroidDto,
  CreateSteroidDto,
  SteroidQueryDto,
  UpdateSteroidDto
> {
  constructor(
    @InjectModel(Steroid.name) readonly steroidModel: Model<SteroidDocument>,
  ) {
    super(steroidModel, SteroidDto);
  }

  async getDetailedSteroids(): Promise<SteroidDetailDto[]>;
  async getDetailedSteroids(steroidId: string): Promise<SteroidDetailDto>;
  async getDetailedSteroids(
    steroidId?: string,
  ): Promise<SteroidDetailDto | SteroidDetailDto[]> {
    const steroidReviews = await this.steroidModel.aggregate(
      steroidReviewsAggregation(steroidId),
    );

    const steroidReviewDtos = steroidReviews.map((steroid) =>
      plainToClass(SteroidDetailDto, steroid),
    );

    const steroids = steroidReviewDtos.sort(
      (rev1, rev2) => rev2.score - rev1.score,
    );

    if (steroidId && steroidReviews.length) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [steroid] = steroids;
      return steroid;
    }
    return steroidReviewDtos;
  }
}
