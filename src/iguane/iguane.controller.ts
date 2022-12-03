import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Iguane } from './iguane.entity';
import { IguaneService } from './iguane.service';



@Controller('iguane')
export class IguaneController {
  constructor(private readonly iguaneService: IguaneService) {}

  @Get()
  getAllIguane(): Promise<Iguane[]> {
    return this.iguaneService.getAllIguane();
  }

/*   @Get('/:refuge')
  getAllVehiclesByType(@Param('refuge') refuge: number): Promise<Iguane[]> {
    return this.iguaneService.getAllIguaneByRefuge(refuge);
  } */

 
}
