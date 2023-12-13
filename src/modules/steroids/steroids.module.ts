import { Module } from '@nestjs/common';
import { SteroidsModule } from './steroids/steroids.module';
import { CommonNamesModule } from './common-names/common-names.module';
import { ManufacturersModule } from './manufacturers';

@Module({
  imports: [SteroidsModule, CommonNamesModule, ManufacturersModule],
  exports: [SteroidsModule, CommonNamesModule, ManufacturersModule],
})
export class _SteroidsModule {}
