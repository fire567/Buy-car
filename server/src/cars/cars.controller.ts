import { Controller, Get } from '@nestjs/common';
import carsJSON from './cars.json';

@Controller('cars')
export class CarsController {
  //constructor(private readonly CarsService) {}

  @Get()
  async getAllCars() {
    return carsJSON;
  }
}
