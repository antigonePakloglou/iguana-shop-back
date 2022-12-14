import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { DemandeAdoption } from './demande_adoption.entity';
import { IDemandeAdoption } from './demande_adoption.interface';
import { DemandeAdoptionRepository } from './demande_adoption.repository';


@Injectable()
export class DemandeAdoptionService {
  constructor(private readonly demandeAdoptionRepository: DemandeAdoptionRepository) {}

  getAllDemandeAdoption(): Promise<DemandeAdoption[]> {
    return this.demandeAdoptionRepository.find();
  }

  createDemandeAdoption(
    newAdoptionDemande: Omit<IDemandeAdoption, 'id'>,
  ): Promise<DemandeAdoption> {
   
    const adoptionDemandeToCreate = {
      ...newAdoptionDemande
    };
    return this.demandeAdoptionRepository.save(adoptionDemandeToCreate);
  }

  updateEligibleDemandeAdoption(
    id: number,
    updateAdoptionDemandeEligble: IDemandeAdoption
  ): Promise<UpdateResult> {
   
    const adoptionDemandeToUpdate = {
      ...updateAdoptionDemandeEligble
    };
    return this.demandeAdoptionRepository.update(id, adoptionDemandeToUpdate);
  }


}
