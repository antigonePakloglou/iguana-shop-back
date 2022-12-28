import { DemandeAdoption } from './demande_adoption.entity';
import { IDemandeAdoption } from './demande_adoption.interface';
import { DemandeAdoptionRepository } from './demande_adoption.repository';
export declare class DemandeAdoptionService {
    private readonly demandeAdoptionRepository;
    constructor(demandeAdoptionRepository: DemandeAdoptionRepository);
    getAllDemandeAdoption(): Promise<DemandeAdoption[]>;
    createDemandeAdoption(newAdoptionDemande: Omit<IDemandeAdoption, 'id'>): Promise<DemandeAdoption>;
}
