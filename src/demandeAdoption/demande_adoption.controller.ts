import { Controller, Get } from '@nestjs/common';
import { DemandeAdoption } from './demande_adoption.entity';
import { DemandeAdoptionService } from './demande_adoption.service';



@Controller('refuge')
export class DemandeAdoptionController {
  constructor(private readonly demandeAdoptionService: DemandeAdoptionService) {}

  @Get()
  getAllRefuge(): Promise<DemandeAdoption[]> {
    return this.demandeAdoptionService.getAllDemandeAdoption();
  }
 
}
