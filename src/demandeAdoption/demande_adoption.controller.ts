import { Body, Controller, Get, Post } from '@nestjs/common';
import { DemandeAdoption } from './demande_adoption.entity';
import { DemandeAdoptionService } from './demande_adoption.service';



@Controller('api/demandeAdoption')
export class DemandeAdoptionController {
  constructor(private readonly demandeAdoptionService: DemandeAdoptionService) {}

  @Get()
  getAllRefuge(): Promise<DemandeAdoption[]> {
    return this.demandeAdoptionService.getAllDemandeAdoption();
  }

  @Post()
  create(@Body() demandeAdoption: DemandeAdoption) {
    return this.demandeAdoptionService.createDemandeAdoption(demandeAdoption);
  }

  @Get()
  getAllDemandes(): Promise<DemandeAdoption[]> {
    return this.demandeAdoptionService.getAllDemandeAdoption();
  }
 
}
