import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Iguane } from './iguane.entity';
import { IguaneService } from './iguane.service';



@Controller('api/iguane')
export class IguaneController {
  constructor(private readonly iguaneService: IguaneService) {}

  @Get()
  getAllIguane(): Promise<Iguane[]> {
    return this.iguaneService.getAllIguane();
  }

  @Get('/:id')
  getIguaneById(@Param('id') id: number): Promise<Iguane> {
    return this.iguaneService.getIguaneById(id);
  }
/*   @Get('/:refuge')
  getAllVehiclesByType(@Param('refuge') refuge: number): Promise<Iguane[]> {
    return this.iguaneService.getAllIguaneByRefuge(refuge);
  } */

}

