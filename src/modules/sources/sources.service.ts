import { Injectable } from '@nestjs/common';
import { Source, SourceDocument } from './source.schema';
import { SourceDto, SourceQueryDto, UpdateSourceDto } from './dto/source.dto';
import { CreateSourceDto } from './dto/create-source.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/@base/generics/crud-generic';
import sourceReviewsAggregation from './query-aggregations/source-reviews.aggregation';
import { plainToClass } from 'class-transformer';
import { SourcePointsDto } from './dto/source-points.dto';

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

  async findDetailed(): Promise<SourcePointsDto[]> {
    const results = await this.sourceModel.aggregate(sourceReviewsAggregation);
    return results.map((res) => plainToClass(SourcePointsDto, res));
  }
}
