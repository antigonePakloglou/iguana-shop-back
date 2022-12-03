import { Injectable } from '@nestjs/common';
import { DemandeAdoption } from './demande_adoption.entity';
import { DemandeAdoptionRepository } from './demande_adoption.repository';


@Injectable()
export class DemandeAdoptionService {
  constructor(private readonly demandeAdoptionRepository: DemandeAdoptionRepository) {}

  getAllDemandeAdoption(): Promise<DemandeAdoption[]> {
    return this.demandeAdoptionRepository.find();
  }

  /* getAllIguaneByRefuge(refuge: string): Promise<Refuge[]> {
    return this.refugeRepository.find({
      where: {
        refuge: refuge,
      },
    });
  } */

  
}
