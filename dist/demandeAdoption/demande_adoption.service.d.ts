import { DemandeAdoption } from './demande_adoption.entity';
import { DemandeAdoptionRepository } from './demande_adoption.repository';
export declare class DemandeAdoptionService {
    private readonly demandeAdoptionRepository;
    constructor(demandeAdoptionRepository: DemandeAdoptionRepository);
    getAllDemandeAdoption(): Promise<DemandeAdoption[]>;
}
