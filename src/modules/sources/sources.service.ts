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
import {
  sourceCommentsAggregation,
  sourceReviewsAggregation,
  sourceReviewsAggregationById,
} from './aggregations/sources.aggregations';

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
    const sourceReviews = await this.sourceModel.aggregate(
      sourceReviewsAggregation,
    );
    const sourceReviewsDtos = sourceReviews.map((res) =>
      plainToClass(SourcePointsDto, res),
    );

    return sourceReviewsDtos.sort((rev1, rev2) => rev2.score - rev1.score);
  }

  async getSourceReviewsById(sourceId: string): Promise<SourcePointsDto> {
    const aggregationQuery = sourceReviewsAggregationById(sourceId);
    const [source] = await this.sourceModel.aggregate(aggregationQuery);
    return plainToClass(SourcePointsDto, source);
  }
}
