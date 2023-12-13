import { Module } from '@nestjs/common';
import { Source, SourceSchema } from './source.schema';
import { SourcesService } from './sources.service';
import { SourcesController } from './sources.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Source.name, schema: SourceSchema }]),
  ],
  controllers: [SourcesController],
  providers: [SourcesService],
})
export class SourcesModule {}
