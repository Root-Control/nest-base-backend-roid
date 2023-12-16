import { Injectable } from '@nestjs/common';
import { Steroid, SteroidDocument } from './steroid.schema';
import {
  SteroidCommentsCountDto,
  SteroidDto,
  SteroidQueryDto,
  UpdateSteroidDto,
} from './dto/steroid.dto';
import { CreateSteroidDto } from './dto/create-steroid.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { CommentsService } from 'src/modules/comments/comments.service';
import { plainToClass } from 'class-transformer';
import { SteroidPointsDto } from './dto/steroid-points.dto';
import {
  steroidCommentsAggregation,
  steroidReviewsAggregation,
} from './aggregations/steroids.aggregations';

@Injectable()
export class SteroidsService extends CrudService<
  SteroidDto,
  CreateSteroidDto,
  SteroidQueryDto,
  UpdateSteroidDto
> {
  constructor(
    @InjectModel(Steroid.name) readonly steroidModel: Model<SteroidDocument>,
    private readonly commentsService: CommentsService,
  ) {
    super(steroidModel, SteroidDto);
  }

  async getSteroidComments(): Promise<SteroidCommentsCountDto[]> {
    const steroids = await this.steroidModel.aggregate(
      steroidCommentsAggregation,
    );
    return steroids.map((steroid) =>
      plainToClass(SteroidCommentsCountDto, steroid),
    );
  }

  async getSteroidReviews(): Promise<SteroidPointsDto[]> {
    const results = await this.steroidModel.aggregate(
      steroidReviewsAggregation,
    );
    return results.map((res) => plainToClass(SteroidPointsDto, res));
  }
}
