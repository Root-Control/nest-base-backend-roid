import { Injectable } from '@nestjs/common';
import { Source, SourceDocument } from './source.schema';
import {
  SourceDetailDto,
  SourceDto,
  SourceQueryDto,
  UpdateSourceDto,
} from './dto/source.dto';
import { CreateSourceDto } from './dto/create-source.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import { plainToClass } from 'class-transformer';
import { sourceReviewsAggregation } from './aggregations/sources.aggregations';

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

  async getDetailedSources(): Promise<SourceDetailDto[]>;
  async getDetailedSources(sourceId: string): Promise<SourceDetailDto>;
  async getDetailedSources(
    sourceId?: string,
  ): Promise<SourceDetailDto | SourceDetailDto[]> {
    const sourceReviews = await this.sourceModel.aggregate(
      sourceReviewsAggregation(sourceId),
    );
    const sourceReviewsDtos = sourceReviews.map((res) =>
      plainToClass(SourceDetailDto, res),
    );

    const sources = sourceReviewsDtos.sort(
      (rev1, rev2) => rev2.score - rev1.score,
    );

    if (sourceId && sources.length) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [source, ...res] = sources;
      return source;
    }
    return sources;
  }
}
