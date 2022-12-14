import { Controller, Get, Param } from '@nestjs/common';
import { Refuge } from './refuge.entity';
import { RefugeService } from './refuge.service';



@Controller('api/refuge')
export class RefugeController {
  constructor(private readonly refugeService: RefugeService) {}

  @Get()
  getAllRefuge(): Promise<Refuge[]> {
    return this.refugeService.getAllRefuge();
  }
 
  @Get('/:id')
  getRefugeById(@Param('id') id: number): Promise<Refuge> {
    return this.refugeService.getRefugeById(id);
  }
}
