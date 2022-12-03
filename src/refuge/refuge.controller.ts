import { Controller, Get } from '@nestjs/common';
import { Refuge } from './refuge.entity';
import { RefugeService } from './refuge.service';



@Controller('refuge')
export class RefugeController {
  constructor(private readonly refugeService: RefugeService) {}

  @Get()
  getAllRefuge(): Promise<Refuge[]> {
    return this.refugeService.getAllRefuge();
  }
 
}
