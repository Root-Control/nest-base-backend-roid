import { Injectable } from '@nestjs/common';
import { Source, SourceDocument } from './source.schema';
import {
  SourceCommentsCountDto,
  SourceDto,
  SourceQueryDto,
  UpdateSourceDto,
} from './dto/source.dto';
import { CreateSourceDto } from './dto/create-source.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { plainToClass } from 'class-transformer';
import { SourcePointsDto } from './dto/source-points.dto';
import { getReviewAggregation } from 'src/@common/@mongodb-aggregations/global-aggregations';
import { sourceCommentsAggregation } from './aggregations/sources.aggregations';

@Injectable()
export class SourcesService extends CrudService<
  SourceDto,
  CreateSourceDto,
  SourceQueryDto,
  UpdateSourceDto
> {
  constructor(
    @InjectModel(Source.name) readonly sourceModel: Model<SourceDocument>,
  ) {
    super(sourceModel, SourceDto);
  }

  async getSourceComments(): Promise<SourceCommentsCountDto[]> {
    const sources = await this.sourceModel.aggregate(sourceCommentsAggregation);
    return sources.map((source) =>
      plainToClass(SourceCommentsCountDto, source),
    );
  }

  async getSourceReviews(): Promise<SourcePointsDto[]> {
    const sourceReviewsAggregation = getReviewAggregation('Source');
    const results = await this.sourceModel.aggregate(sourceReviewsAggregation);
    return results.map((res) => plainToClass(SourcePointsDto, res));
  }
}
