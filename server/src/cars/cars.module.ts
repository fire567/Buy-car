import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { CarsController } from './cars.controller';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [CarsResolver, CarsService],
})
export class CarsModule {}
